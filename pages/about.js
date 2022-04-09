import Philosophy from "../components/about/Philosophy";
import Footer from "../components/Footer";
import Highlight from "../components/Highlight";
import Meta from "../components/Meta";
import Nav from "../components/Nav";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center min-h-screen text-navy dark:text-white dark:bg-navy">
      <Meta title="About" />
      <Nav />
      <main className="max-w-xs md:max-w-2xl lg:max-w-4xl">
        <h1 className="font-bold headline font-montserrat">About</h1>
        <br />
        <p className="text-2xl font-semibold font-montserrat">
          <Highlight>
            <span className="font-semibold">Command Tech</span>
          </Highlight>{" "}
          is here to make sure anyone that has an interest in tech has the
          resources and opportunities to pursue that interest!
        </p>
        <br />
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="w-full md:w-1/2">
            <p>
              We do this through creating organiser tools to make creating
              empowering tech communities in your own community so much easier!
              <br />
              <br />
              We do this through creating organiser tools to make creating
              empowering tech communities in your own community so much easier!
            </p>
          </div>
          <div className="w-full overflow-hidden border-2 rounded-xl md:w-1/2 border-navy dark:border-white">
            <Image src="/og-image.png" width={500} height={250} />
          </div>
        </div>
        {/* <h2 className="pt-4 font-bold headline font-montserrat">
          Our Philosophy
        </h2>
        <Philosophy />
        <h2>Our Annual Reports</h2> */}
      </main>
      <Footer />
    </div>
  );
}
