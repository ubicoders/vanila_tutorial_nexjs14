import React from "react";

const page = ({ params }: { params: { blog_id: string } }) => {
  return <div>this is a specific blog - {params.blog_id}</div>;
};

export default page;
