import { getFakeMetadata } from "@/fake_db/dummy_metadata";
import { redirect } from "next/navigation";

export default function Home() {
  // redirect("/about");
  return (
    <div>
      <header></header>
      this is main
    </div>
  );
}

export async function generateMetadata() {
  // return getFakeMetadata("main");
  var metadata: any = getFakeMetadata("main");
  metadata.alternates = {
    canonical: "https://www.ubicoders.com/",
  };
}
