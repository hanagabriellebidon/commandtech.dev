import Image from "next/image";
import Icon from "supercons";
import Link from "next/link";
import { useTheme } from "next-themes";
import Mailchimp from "./MailchimpForm";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  return (
    <footer className="flex pt-16 pb-8 mx-4 space-between max-w-screen md:max-w-4xl lg:max-w-6xl">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <ul className="space-y-1">
            <li>
              {theme === "dark" ? (
                <Image src="/logos/square-white.png" width={50} height={50} />
              ) : (
                <Image src="/logos/square-blue.png" width={50} height={50} />
              )}
            </li>
            <li>
              Command Tech is a student-led nonprofit empowering using tech to
              empower female and nonbinary students.
            </li>
            <li>
              <a
                href="mailto:info@commandtech.dev"
                className="font-bold underline"
              >
                info@commandtech.dev
              </a>
            </li>

            <li className="flex flex-row cursor-pointer">
              <a
                href="https://twitter.com/wecommandtech"
                target="_blank"
                rel="noreferrer"
              >
                <Icon glyph="twitter" size={30} />
              </a>
              <a
                href="hhttps://www.instagram.com/command.tech/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon glyph="instagram" size={30} />
              </a>
              <a
                href="https://www.linkedin.com/company/commandtechmy/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon glyph="link" size={30} />
              </a>
              <a
                href="https://github.com/Command-Tech"
                target="_blank"
                rel="noreferrer"
              >
                <Icon glyph="github" size={30} />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <strong>Command Tech</strong>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/advisors">Advisors</Link>
            </li>
            <li>
              <Link href="/press">Press Kit</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <strong>Get Involved</strong>
            <li>
              <Link href="/clubs">Clubs</Link>
            </li>
            <li>
              <Link href="https://connect.commandtech.dev">
                Command Connect
              </Link>
            </li>

            <li>
              <Link href="/">Partnerships</Link>
            </li>
            <li>
              <a
                href="https://bank.hackclub.com/donations/start/command-tech"
                target="_blank"
                rel="noreferrer"
              >
                Donate
              </a>
            </li>
            <li>
              <Link href="/discord">Discord Community</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <strong>Subscribe</strong>
              <br />
              <span>Opportunities and updates straight to your inbox!</span>
            </li>
            <li>
              <Mailchimp />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
