import JobDetails from "@/components/user/JobDetails";

export default async function Page({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = await params;

  return <JobDetails id={jobId} />;
}
