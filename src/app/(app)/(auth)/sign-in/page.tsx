import { redirect } from "next/navigation";

import { caller } from "@/trpc/server";

import { SignInView } from "@/modules/auth/ui/views/sign-in-view";

const Page = async () => {
  const session = await caller.auth.session();

  if (session.user) {
    redirect("/");
  }

  return <SignInView />;
};

export default Page;
