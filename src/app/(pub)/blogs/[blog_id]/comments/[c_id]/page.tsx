import React from "react";

const page = ({ params }: { params: { c_id: string } }) => {
  return <div>this is a specific comment - {params.c_id}</div>;
};

export default page;
