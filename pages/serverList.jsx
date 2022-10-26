import { useSession } from "next-auth/react";
import {useRouter} from "next/router"
import { useEffect } from "react";
import Link from "next/link";

export default function Component() {
  const router = useRouter(); 
  const { data: session, status } = useSession();

  // automatically redirect to the sign-in page if not logged in.
  if (status != "authenticated") {
    useEffect(() => {
      router.push("/api/auth/signin")
    }, []);
  }

  return <Link href="/api/auth/signin">Sign in</Link>;
}
