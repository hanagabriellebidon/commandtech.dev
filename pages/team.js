import Button from "../components/Button";
import Footer from "../components/Footer";
import Highlight from "../components/Highlight";
import Meta from "../components/Meta";
import Nav from "../components/Nav";
import TeamCard from "../components/team/TeamCard";
import roster from "../lib/team.json";

export default function Team() {
  const ignoreBr = {
    '@media (max-width: 425px)': {
      display: 'none',
    },
  };

  return (
    <div className="flex flex-col items-center min-h-screen text-navy dark:text-white dark:bg-navy">
      <Meta title="Team" />
      <Nav />
      <main  className="px-2">
        <h1 className="subheadline container-narrow mx-auto text-center leading-normal font-bold font-montserrat">
          United by the mission and with <br />
          <Highlight >
            trust,&nbsp;communication&nbsp;<br className="sm:hidden inline"/>and&nbsp;will&nbsp;to&nbsp;learn,
          </Highlight>{" "}
          <br />
          our volunteer-based team works together and builds to achieve our
          mission!
        </h1>
        <br />
        <span className="flex justify-center">
          <Button href="https://www.notion.so/Command-Tech-1d22a79a0788429191825a82373be226">
            Join&nbsp;our&nbsp;team&nbsp;&rarr;
          </Button>
        </span>
        <div>
          <h2 className="subheadline font-montserrat font-bold py-4">
            Our Advisors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-16">
            <TeamCard
              src="/team/belle.png"
              name="Belle"
              position="Lead Director"
            />
          </div>

          <h2 className="subheadline font-montserrat font-bold py-4">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-16">
            {roster.map((person, index) => (
              <TeamCard
                key={index}
                src={person.image}
                name={person.name}
                position={person.role}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
