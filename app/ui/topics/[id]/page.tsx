export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params; // 👈 Await it here!
  console.log("Resolved Params:", resolvedParams);

  await new Promise((resolve) => setTimeout(resolve, 300)); // Simulating async work

  return <div>Topics Page: {resolvedParams.id}</div>;
}
