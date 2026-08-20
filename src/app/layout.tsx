import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import CVFloatingButton from "@/components/CVFloatingButton";

export const metadata: Metadata = {
  title: "Tejas Thakare | Systems Engineer & Backend Architect",
  description:
    "Engineering high-performance distributed systems, real-time analytics pipelines, and scalable backend architectures. Specialist in Node.js, PostgreSQL, and Cloud Infrastructure.",
  keywords: [
    "Tejas Thakare",
    "Systems Engineer",
    "Backend Architect",
    "Distributed Systems",
    "Mumbai",
    "Node.js",
    "PostgreSQL",
    "Cloud Computing",
  ],
  authors: [{ name: "Tejas Thakare" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Tejas Thakare | Systems Engineer & Backend Architect",
    description:
      "Engineering high-performance distributed systems and scalable backend architectures.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejas Thakare | Systems Engineer & Backend Architect",
    description:
      "Engineering high-performance distributed systems and scalable backend architectures.",
    images: ["/logo.png"],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                  document.documentElement.classList.remove('dark')
                } else {
                  document.documentElement.classList.add('dark')
                }
              } catch (_) {}
            `
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Unbounded:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: 'class',
                theme: {
                  extend: {
                    colors: {
                      'bg-primary': 'var(--color-bg-primary)',
                      'bg-secondary': 'var(--color-bg-secondary)',
                      'bg-tertiary': 'var(--color-bg-tertiary)',
                      'accent': 'var(--color-accent)',
                      'accent-light': 'var(--color-accent-light)',
                      'accent-glow': 'var(--color-accent-glow)',
                      'accent-glow-strong': 'var(--color-accent-glow-strong)',
                      'text-primary': 'var(--color-text-primary)',
                      'text-secondary': 'var(--color-text-secondary)',
                      'text-muted': 'var(--color-text-muted)',
                      'border': 'var(--color-border)',
                      'border-hover': 'var(--color-border-hover)',
                      'glass': 'var(--color-glass)',
                      'glass-hover': 'var(--color-glass-hover)',
                      'green': 'var(--color-green)',
                      'amber': 'var(--color-amber)',
                      'red': 'var(--color-red)',
                      'cyan': 'var(--color-cyan)',
                      'on-panel': 'var(--color-on-panel)',
                      'on-panel-muted': 'var(--color-on-panel-muted)',
                    },
                    fontFamily: {
                      sans: ['Unbounded', 'Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                      mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
                      display: ['Unbounded', 'Space Grotesk', 'ui-sans-serif', 'sans-serif'],
                    }
                  }
                }
              }
            `,
          }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased">
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-TB9JCH4Q9Q`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TB9JCH4Q9Q');
            `,
          }}
        />
        {children}
        <CVFloatingButton />
      </body>
    </html>
  );
}
