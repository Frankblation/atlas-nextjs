export default async function Page({ params }: { params: { id?: string } }) {
  console.log("Params received:", params);

  if (!params || !params.id) {
      return <div>Loading...</div>;
  }

  await new Promise((resolve) => setTimeout(resolve, 300));

  return <div>Topics Page: {params.id}</div>;
}
