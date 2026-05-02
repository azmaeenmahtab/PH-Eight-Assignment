"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import GreenButton from "@/components/Shared/Button/GreenButton";
import { authClient } from "@/lib/auth-client";

const UpdateInformationIndex = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isUpdating) return;

    setIsUpdating(true);
    setErrorMessage("");
    setSuccessMessage("");

    const updatedName = name.trim() || user?.name || "";
    const updatedImage = image.trim() || user?.image || "";

    try {
      const { error } = await authClient.updateUser({
        image: updatedImage,
        name: updatedName,
      });

      if (error) {
        setErrorMessage(error.message || "Update failed. Please try again.");
        return;
      }

      setSuccessMessage("Profile updated successfully.");
      setName("");
      setImage("");
    } catch (err) {
      setErrorMessage("Update failed. Please try again.");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <section className="flex w-full items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl rounded-2xl border border-slate-100 bg-white p-8 shadow-lg">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-900">
            Update Information
          </h1>
          <p className="text-sm text-slate-500">
            Keep your profile details up to date.
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {errorMessage && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-600">
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-700">
              {successMessage}
            </div>
          )}

          <label className="text-xs font-semibold text-slate-600">
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder={
                isPending
                  ? "Loading..."
                  : user?.name || "Full name"
              }
              className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-100"
            />
          </label>

          <label className="text-xs font-semibold text-slate-600">
            Image URL
            <input
              type="url"
              name="image"
              value={image}
              onChange={(event) => setImage(event.target.value)}
              placeholder={
                isPending
                  ? "Loading..."
                  : user?.image || "https://example.com/image.jpg"
              }
              className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-100"
            />
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <GreenButton
              type="submit"
              text={isUpdating ? "Updating..." : "Update Information"}
              disabled={isUpdating || isPending}
              className="sm:w-auto"
            />
            <button
              type="button"
              onClick={() => router.push("/profile")}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50"
            >
              Back to Profile
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateInformationIndex;
