import React from "react";

const page = ({ params }: { params: { slug: any } }) => {
  return <div>this is a catch-all route - {params.slug}</div>;
};

export default page;
