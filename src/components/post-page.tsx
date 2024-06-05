import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export default async function PostPage({ pageId }: { pageId: string }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(pageId),
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <>
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-prose mx-auto">{post.body}</p>
    </>
  );
}
