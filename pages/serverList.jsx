import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Component() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>;
  }

  return <Link href="/api/auth/signin">Sign in</Link>;
}
