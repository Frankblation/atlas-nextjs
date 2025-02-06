import React from "react";

export default async   function Page({ params }: { params: { id: string } }) {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return <div>Topics Page: (id)</div>;
}