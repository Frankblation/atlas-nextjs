"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"

export default function LoggedInUser() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="flex items-center space-x-2">
        {session.user?.image ? (
          <Image
            src={session.user.image || "/placeholder.svg"}
            alt={session.user.name || "User"}
            width={32}
            height={32}
            className="rounded-full"
          />
        ) : (
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
        )}
        <span>{session.user?.name}</span>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }

  return <button onClick={() => signIn("github")}>Sign in with GitHub</button>
}

