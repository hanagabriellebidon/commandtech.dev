import Philosophy from "../components/about/Philosophy";
import Footer from "../components/Footer";
import Highlight from "../components/Highlight";
import Meta from "../components/Meta";
import Nav from "../components/Nav";

export default function Team() {
  return (
    <div className="flex flex-col items-center min-h-screen text-navy dark:text-white dark:bg-navy">
      <Meta title="About" />
      <Nav />
      <main className="max-w-sm md:max-w-2xl lg:max-w-4xl">
        <h1>About</h1>
        <p className="font-semibold">
          <Highlight>
            <span className="font-semibold">Command Tech</span>
          </Highlight>
          is here to make sure anyone that has an interest in tech has the
          resources and opportunities to pursue that interest!
        </p>
        <p>
          We do this through creating organiser tools to make creating
          empowering tech communities in your own community so much easier! We
          do this through creating organiser tools to make creating empowering
          tech communities in your own community so much easier!
        </p>
        <h2>Our Philosophy</h2>
        <Philosophy />
        <h2>Our Annual Reports</h2>
      </main>
      <Footer />
    </div>
  );
}
