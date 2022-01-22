import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Highlight from "../components/Highlight";
import Hero from "../components/landing/Hero";
import InfoCard from "../components/landing/InfoCard";
import Meta from "../components/Meta";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen text-navy dark:text-white dark:bg-navy">
      <Meta title="Home" />
      <Nav />

      <Hero />
      <main className="container">
        <div className="py-4 lead" />
        <h3 className="pb-4 lead font-montserrat">
          We can help <Highlight>you</Highlight> build tech opportunities for
          your community!
        </h3>
        <section className="mx-8 md:mx-0">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              destination="http://bit.ly/ct-resource"
              heading="Learn a new skill"
              copy="Want to further your skills or discover something new? Our team, with the help of the community, has compiled a resource guide for tech, design, and productivity!"
            />
            <InfoCard
              destination="/"
              heading="Find the perfect speaker, workshop host, judge "
              copy="We have a network of tech professionals that are enthusiastic about helping the next generation of female and nonbinary tech students!"
            />
            <InfoCard
              destination="https://commandtech.dev/connect"
              heading="Connect your community to tech mentors"
              copy="We provide the framework and mentors for your community so they can work on projects together and learn about the industry from tech mentors!"
            />
          </div>
        </section>
        <div className="flex flex-col py-16 md:flex-row-reverse">
          <span>
            <p className="pb-4 lead font-montserrat eyebrow">
              We exist so that you can change the world!
            </p>
            <h3 className="pb-4 lead font-montserrat">
              Join a Command Tech program. &rarr;
            </h3>
            <small>Photo credit: Hack Club's Flagship Summit, 2019.</small>
          </span>
          <img
            src="/images/hc-flagship.jpg"
            alt="Students in a circle raising their hands"
            className="w-5/6 pt-8 mx-8 shadow-lg md:w-2/5 rounded-xl md:pt-0"
          />
          {/* <div className="flex flex-col justify-center mx-auto space-x-5 md:flex-row">
            <div className="border-2 rounded-lg border-navy dark:border-white">
              <Image src="/og-image.png" width={330} height={180} />
            </div>
            <p className="max-w-sm">
              Integer aliquet est eros, a condimentum diam pulvinar eget.
              Aliquam erat volutpat. Nam maximus aliquet diam, et ultricies
              lorem maximus a. Aenean orci dui, dapibus nec.
            </p>
          </div> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
