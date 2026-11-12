import MailDetails from "@/components/MailDetails";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // console.log(id);

  return <MailDetails id={id} setSelectedMailId={() => {}} />;
}
