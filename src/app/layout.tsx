import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local host 3000 default",
  description: "generated for youtube vanilla tutorial nextjs",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer className="bg-teal-500">this is footer</footer>
      </body>
    </html>
  );
}
