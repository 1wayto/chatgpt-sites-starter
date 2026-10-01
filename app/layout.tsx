import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Launch Your First ChatGPT Site",
  description:
    "An independent native Sites sign-in example with a protected account page.",
  icons: { icon: { url: "/favicon.svg", type: "image/svg+xml" } },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <header>
            <Link className="brand" href="/">
              S<span>ChatGPT Sites starter</span>
            </Link>
            <span className="badge">Independent example</span>
          </header>
          {children}
          <footer>
            Built as a community example by 1wayto. Not affiliated with or
            endorsed by OpenAI.
          </footer>
        </div>
      </body>
    </html>
  );
}
