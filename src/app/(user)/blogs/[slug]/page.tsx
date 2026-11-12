import BlogDetails from "@/components/user/BlogDetails";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // console.log(slug);
  return <BlogDetails slug={slug} />;
}
