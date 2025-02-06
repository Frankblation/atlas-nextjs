export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  await new Promise((resolve) => setTimeout(resolve, 300));

  return <div>Topics Page: {id}</div>;
}
