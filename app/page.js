import { redirect } from "next/navigation";

export const metadata = {
  title: "Lumina Library",
};

export default function Home() {
  redirect("/home");
}
