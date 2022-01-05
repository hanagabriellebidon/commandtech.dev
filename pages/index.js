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
        <h3 className="lead font-montserrat pb-4">
          We can help <Highlight>you</Highlight> build tech opportunities for
          your community!
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-4 mx-auto">
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
        <div className="py-8">
          <h3 className="lead font-montserrat pb-4">
            We exist so that you can change the world!
          </h3>
          <div className="flex flex-col md:flex-row justify-center space-x-5 mx-auto">
            <div className="border-2 rounded-lg border-navy dark:border-white">
              <Image src="/og-image.png" width={330} height={180} />
            </div>
            <p className="max-w-sm">
              Integer aliquet est eros, a condimentum diam pulvinar eget.
              Aliquam erat volutpat. Nam maximus aliquet diam, et ultricies
              lorem maximus a. Aenean orci dui, dapibus nec.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
