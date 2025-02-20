import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { UploadForm } from "@/components/upload-form";
import { unauthorized } from "next/navigation";

export default async function AddNew() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return unauthorized();
  }
  if (session.user && session.user.email !== "jon@jonheslop.com") {
    return (
      <>
        <h1 className="leading-tight text-3xl mb-6">Access denied</h1>
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
