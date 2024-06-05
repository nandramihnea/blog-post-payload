'use server'

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost (formData: FormData) {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();

  if(!isLoggedIn) {
    redirect('/api/auth/login');
  }

  const title = formData.get('title') as string;
  const body = formData.get('body') as string;

  await prisma.post.create({
    data: {
      title,
      body
    }
  })

  revalidatePath('/posts');
}

// revalidate the cache (bust the cache) so that the changes for adding a new
// post can be seen on the /posts page immediately
