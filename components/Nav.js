import Link from "next/link";
import { useTheme } from "next-themes";
import Icon from "supercons";
import Image from "next/image";

const links = [
  { label: "About", href: "/about" },
  { label: "Find a Speaker", href: "/" },
  { label: "Get a Mentor", href: "/" },
];

export default function Nav() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className=" dark:text-white">
      <ul className="flex flex-wrap items-center justify-between p-2 md:p-4 sm:p-8 mt-0">
        <Link href="/" passHref>
          <li className="left-0 cursor-pointer">
            {theme === "dark" ? (
              <Image src="/logos/square-white.png" width={50} height={50} />
            ) : (
              <Image src="/logos/square-blue.png" width={50} height={50} />
            )}
          </li>
        </Link>
        <ul className={`mx-auto sm:mx-0 flex flex-row space-x-5`}>
          {links.map(({ href, label }) => (
            <li className="self-center" key={`${href}${label}`}>
              <Link href={href}>
                <a
                  className={`px-4 py-2 rounded-2xl hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10`}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
              className="p-2 rounded-full hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10"
            >
              {theme === "dark" ? (
                <Icon glyph="moon" size={24} />
              ) : (
                <Icon glyph="moon-fill" size={24} />
              )}
            </button>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
