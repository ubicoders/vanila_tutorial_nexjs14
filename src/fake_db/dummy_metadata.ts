const DASHBOARD_METADATA = {
    title: "Dashboard",
    description: "dash board discription",
    openGraph: {
      title: "dashboard open graph title",
      description: "dashboard open graph description",
      url: "my url - dashboard",
      images: [
        {
          url: "https://images.unsplash.com/photo-1701906268034-21d37f41bd4e?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          width: 800,
          height: 600,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image", // "summary", "summary_large_image", "app", or "player"
      title: "dashboard twitter title",
      description: "dashboard twitter description",
      images: [
        {
          url: "https://images.unsplash.com/photo-1701906268034-21d37f41bd4e?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          width: 800,
          height: 600,
        },
      ],
    },
  };
  
  const MAIN_METADATA = {
    title: "MAIN",
    description: "main board discription",
    openGraph: {
      title: "main open graph title",
      description: "main open graph description",
      url: "my url main",
      images: [
        {
          url: "https://images.unsplash.com/photo-1701906268034-21d37f41bd4e?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          width: 800,
          height: 600,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image", // "summary", "summary_large_image", "app", or "player"
      title: "main twitter title",
      description: "main twitter description",
      images: [
        {
          url: "https://images.unsplash.com/photo-1701906268034-21d37f41bd4e?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          width: 800,
          height: 600,
        },
      ],
    },
  };
  
  export async function getFakeMetadata(page_name: string) {
    const fake_db: any = {
      dashboard: DASHBOARD_METADATA,
      main: MAIN_METADATA,
    };
    return {
      metadataBase: new URL("https://www.example.com/"),
      ...fake_db[page_name],
    };
  }
  