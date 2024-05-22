export default async function PostPage({ pageId }: { pageId: String }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`https://dummyjson.com/posts/${pageId}`);
  const post = await response.json();
  return (
    <>
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-prose mx-auto">{post.body}</p>
    </>
  );
}
