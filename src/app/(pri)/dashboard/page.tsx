import { getFakeMetadata } from "@/fake_db/dummy_metadata";
import React from "react";

const page = () => {
  return <div>dashboard</div>;
};

export default page;

export async function generateMetadata() {
  return getFakeMetadata("dashboard");
}
