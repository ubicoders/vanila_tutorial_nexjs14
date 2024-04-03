import { getFakeMetadata } from "@/fake_db/dummy_metadata";
import React from "react";

const page = () => {
  return <div>this is about</div>;
};

export default page;

export async function generateMetadata() {
  // return getFakeMetadata("main");
  var metadata: any = getFakeMetadata("main");
  metadata.alternates = {
    canonical: "https://www.ubicoders.com/",
  };
}
