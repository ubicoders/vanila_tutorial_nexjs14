import { get_articles } from "@/fake_db/get_articles";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE_URL = "https://www.example.com";

  var page_items = [
    { url: "/dashboard", lastModified: new Date() },
    { url: "/main", lastModified: new Date() },
  ];

  const articles = await get_articles();
  articles.map((article) => {
    page_items.push({
      url: `/blogs/${article.slug}`,
      lastModified: new Date(),
    });
  });

  return page_items.map((item) => ({
    url: BASE_URL + item.url,
    lastModified: item.lastModified,
  }));
}
