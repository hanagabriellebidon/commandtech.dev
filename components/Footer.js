import Image from "next/image";
import Icon from "supercons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex space-between max-w-screen md:max-w-4xl lg:max-w-6xl mx-4 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <ul className="space-y-1">
            <li>
              <Image src="/logos/square-blue.png" width={50} height={50} />
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

            <li className="flex flex-row">
              <Icon glyph="twitter" size={30} />
              <Icon glyph="instagram" size={30} />
              <Icon glyph="youtube" size={30} />
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
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/team#advisors">Advisors</Link>
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
              <Link href="/">Clubs</Link>
            </li>
            <li>
              <Link href="https://connect.commandtech.dev">
                Command Connect
              </Link>
            </li>
            <li>
              <Link href="/">Command Hacks</Link>
            </li>
            <li>
              <Link href="/">Partnerships</Link>
            </li>
            <li>
              <Link href="https://bank.hackclub.com/donations/start">
                Donate
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <strong>Join our community</strong>
            </li>
            <li>
              <button className="rounded-lg px-3 py-1 font-semibold bg-navy text-white dark:bg-white dark:text-navy mt-1">
                Discord
              </button>
            </li>
            <br />
            <li>
              <strong>Subscribe</strong>
              <br />
              <span>Opportunities and updates straight to your inbox!</span>
            </li>
            <li>
              <form action="" method="POST">
                <input placeholder="enter your email" />
                <br />
                <input
                  type="submit"
                  className="rounded-lg px-3 py-1 font-semibold bg-navy text-white dark:bg-white dark:text-navy mt-1 cursor-pointer"
                />
              </form>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
