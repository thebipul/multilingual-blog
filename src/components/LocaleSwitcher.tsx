"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { i18n } from "../../i18n.config";
import Link from "next/link";

const LocaleSwitcher = () => {
  const pathname = usePathname();

  const redirectedPathname = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  return (
    <ul className="flex">
      {i18n.locales.map((locale) => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathname(locale)}
              className="rounded-md border bg-black px-3 py-2 text-white"
            >
              {locale}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default LocaleSwitcher;
