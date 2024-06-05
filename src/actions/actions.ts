'use server'

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost (formData: FormData) {
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
