import Head from "next/head";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Highlight from "../components/Highlight";
import InfoCard from "../components/landing/InfoCard";
import Meta from "../components/Meta";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen text-navy dark:text-white dark:bg-navy">
      <Meta title="Home" />
      <Nav />
      <main>
        <h1 className="text-center max-w-3xl leading-normal mx-auto">
          Not enough gender minorities are going into technology,{" "}
          <Highlight>Command&nbsp;Tech</Highlight>
          <br /> is here to change that.
        </h1>
        <h3>
          We can help <Highlight>you</Highlight> build tech opportunities for
          your community!
        </h3>
        <div>
          <InfoCard />
        </div>
      </main>
      <Footer />
    </div>
  );
}
