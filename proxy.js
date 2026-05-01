import { NextResponse } from "next/server";

export async function proxy(request) {
    const sessionUrl = new URL("/api/auth/get-session", request.url);
    const sessionResponse = await fetch(sessionUrl, {
        headers: {
            cookie: request.headers.get("cookie") ?? "",
        },
    });

    if (sessionResponse.ok) {
        const data = await sessionResponse.json();
        if (data?.session) {
            return NextResponse.next();
        }
    }

    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
}

export const config = {
    matcher: ["/profile"],
};
