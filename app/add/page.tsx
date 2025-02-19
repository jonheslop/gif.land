import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { UploadForm } from "@/components/upload-form";
import { StyledLink as Link } from "@/components/link";

export default async function AddNew() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <>
        <h1 className="leading-tight text-3xl mb-6">Access denied</h1>
        <Link href="/api/auth/signin">Sign in with GitHub</Link>
      </>
    );
  }
  if (session.user && session.user.email !== "jon@jonheslop.com") {
    return (
      <>
        <h1 className="leading-tight text-3xl mb-6">Access still denied</h1>
        <p className="text-neutral-500">Only Jon can upload files.</p>
      </>
    );
  }
  return (
    <>
      <h1 className="leading-tight text-3xl">Upload a file</h1>
      <p className="text-neutral-500">
        Optimise your images for faster loading times.
      </p>
      <UploadForm />
    </>
  );
}
