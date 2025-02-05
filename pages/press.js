import Button from "../components/Button";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import Nav from "../components/Nav";
import Image from "next/image";

export default function Team() {
  return (
    <div className="flex flex-col items-center min-h-screen text-navy dark:text-white dark:bg-navy">
      <Meta title="Press" />
      <Nav />
      <main className="container-copy">
        <h1 className="font-bold headline font-montserrat">Press</h1>
        <p>
          Thanks for your interest in Command Tech, you can probably find what
          you need here :) Please let us know if you use any information from
          this site!
        </p>
        <h2 className="pt-8 font-semibold subheadline font-montserrat">
          About
        </h2>
        <div className="flex flex-col space-y-5">
          <Description wc="19">
            Command Tech is a fiscally sponsored 501(c)3 organisation that
            utilises tech to empower female and non-binary students
          </Description>
          <Description wc="24">
            Command Tech is a fiscally sponsored 501(c)3 organisation that
            through events, mentorship opportunity and computer science clubs
            empowers female and non-binary students.{" "}
          </Description>
          <Description wc="48">
            Command Tech is a fiscally sponsored 501(c)3 organisation that
            educates, empowers and connects! Through our clubs, mentorship
            program and events, we are able to introduce female and non-binary
            students to tech, give them the resources necessary to explore it,
            and guide them on the next steps!
          </Description>
          <Description wc="78">
            Command Tech is a fiscally sponsored 501(c)3 organisation that
            educates, empowers and connects female and non-binary students! We
            are guided by our core values, integrity, collaboration and
            innovation. Our club program focuses on reaching areas and
            communities without access to computer science classes, our
            mentorship program focuses on uplifting female and non-binary
            students while our events aim to expand the tech community and
            accessible resources. We have directly impacted more than 200 people
            in 14+ countries.
          </Description>
        </div>
        <br />
        <Button href="https://drive.google.com/file/d/1Pg1qO1zSxv9y_aYLnQZarFhbGjTFdwkC/view?usp=sharing">
          Our&nbsp;Pitch&nbsp;Deck&nbsp;&rarr;
        </Button>

        <h2 className="pt-16 font-semibold subheadline font-montserrat">
          Our Logos
        </h2>
        <div className="grid grid-cols-2 gap-5 mx-auto md:grid-cols-4">
          <Image src="/logos/square-white.png" width={200} height={200} />
          <Image src="/logos/square-white.png" width={200} height={200} />
          <Image src="/logos/square-white.png" width={200} height={200} />
          <Image src="/logos/square-white.png" width={200} height={200} />
        </div>

        <h2 className="pt-16 font-semibold subheadline font-montserrat">
          Photos
        </h2>
        <div>
          <p>yeah photos</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Description({ wc, children }) {
  return (
    <div>
      <span className="text-sm font-light lowercase">
        {wc} word description
      </span>
      <br />
      <span className="text-lg">{children}</span>
    </div>
  );
}
