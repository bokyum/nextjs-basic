import { Metadata } from "next";
import Navigation from "../components/navigation";

import "../styles/global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movie",
    default: "Next Movie",
  },
  description: "The best movies on the best framework.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
