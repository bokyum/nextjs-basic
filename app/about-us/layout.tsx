import React from "react";

export const metadata = {
  title: "About Us",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      &copy; Next JS
    </div>
  );
}
