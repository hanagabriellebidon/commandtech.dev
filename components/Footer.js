import Image from "next/image";
import Icon from "supercons";

export default function Footer() {
  return (
    <footer className="flex space-between max-w-screen md:max-w-4xl lg:max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <Image src="/logos/square-blue.png" width={50} height={50} />
          <br />
          <span>
            Command Tech is a student-led nonprofit empowering using tech to
            empower female and nonbinary students.
          </span>
          <br />
          <a href="mailto:info@commandtech.dev" className="font-bold underline">
            info@commandtech.dev
          </a>
          <br />
          <div class="flex flex-row">
            <Icon glyph="twitter" size={30} />
            <Icon glyph="instagram" size={30} />
            <Icon glyph="youtube" size={30} />
          </div>
        </div>
        <div>
          <ul>
            <li>yeah</li>
            <li>yeah</li>
            <li>yeah</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>yeah</li>
            <li>yeah</li>
            <li>yeah</li>
          </ul>
        </div>
        <div>
          <span>Join our community</span>
          <br />
          <button>Discord</button>
          <br />
          <span>Subscribe</span>
          <br />
          <span>
            Opportunities and command tech updates straight to your inbox!
          </span>
          <form action="" method="POST">
            <input placeholder="enter your email" />
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    </footer>
  );
}
