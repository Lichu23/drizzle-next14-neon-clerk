"use client";

import { SignOutButton, UserButton, useClerk, useUser } from "@clerk/nextjs";
import Link from "next/link";

const NavBar = () => {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  return (
    <nav className="flex border-b h-[60pxpx] justify-between items-center p-4">
      <Link href="/">
        <h1 className="font-bold text-3xl">Logo</h1>
      </Link>

      <div className="flex items-center gap-x-4">
        {isSignedIn ? (
          <>
            <button className="bg-slate-50 hover:scale-105 border p-2 rounded-md">
              <SignOutButton />
            </button>
            <UserButton />
          </>
        ) : (
          <>
            <Link href="/sign-in">
              <button className="bg-slate-50 hover:scale-105 border p-2 rounded-md">
                Sign In
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="bg-slate-50 hover:scale-105 border p-2 rounded-md">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
