const articles = [
    {
      author: "John",
      slug: "my-first-article",
      title: "My first article",
      content: "This is my first article",
      description: "article 1 description",
    },
    {
      author: "John",
      title: "My second article",
      slug: "my-second-article",
      content: "This is my second article",
      description: "article 2 description",
    },
    {
      author: "John",
      title: "My third article",
      slug: "my-third-article",
      content: "This is my third article",
      description: "article 3 description",
    },
  ];
  
  export async function get_articles() {
    return articles;
  }
  