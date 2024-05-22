import PostPage from "@/components/post-page";
import Skeleton from "@/components/skeleton";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: string } }) {

  return (
    <main className="px-7 pt-24 text-center">
      <Suspense fallback={<Skeleton />}>
        <PostPage pageId={params.id} />
      </Suspense>
    </main>
  );
}
