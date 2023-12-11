import { getFakeMetadata } from "@/fake_db/dummy_metadata";

export default function Home() {
  return (
    <div>
      <header></header>
      this is main
    </div>
  );
}

export async function generateMetadata() {
  return getFakeMetadata("main");
}
