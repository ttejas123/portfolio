import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tejas Thakare — Systems Engineer | Backend Architecture & Distributed Systems",
  description:
    "Backend-heavy full stack engineer building scalable microservices, real-time analytics pipelines, and distributed systems. Node.js, PostgreSQL, Redis, RabbitMQ, AWS.",
  keywords: [
    "Tejas Thakare",
    "Backend Engineer",
    "Full Stack Developer",
    "Systems Architecture",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "RabbitMQ",
    "Distributed Systems",
    "Real-time Analytics",
    "Mumbai",
  ],
  authors: [{ name: "Tejas Thakare" }],
  openGraph: {
    title: "Tejas Thakare — Systems Engineer",
    description:
      "Engineering scalable backends, real-time pipelines, and distributed systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejas Thakare — Systems Engineer",
    description:
      "Engineering scalable backends, real-time pipelines, and distributed systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
