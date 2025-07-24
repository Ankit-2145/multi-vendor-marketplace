import Link from "next/link";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

export const Footer = () => {
  return (
    <footer className="border-t font-medium bg-white">
      <div className="max-w-(--breakpoint-xl) mx-auto flex items-center gap-2 h-full px-4 py-6 lg:px-12">
        <p>Powered by</p>
        <Link href="/">
          <span className={cn("text-2xl font-semibold", poppins.className)}>
            Market
          </span>
        </Link>
      </div>
    </footer>
  );
};
