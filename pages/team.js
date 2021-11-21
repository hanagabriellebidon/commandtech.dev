import Button from "../components/Button";
import Footer from "../components/Footer";
import Highlight from "../components/Highlight";
import Meta from "../components/Meta";
import Nav from "../components/Nav";
import TeamCard from "../components/team/TeamCard";

export default function Team() {
  return (
    <div className="flex flex-col items-center min-h-screen text-navy dark:text-white dark:bg-navy">
      <Meta title="Team" />
      <Nav />
      <main>
        <h1 className="text-2xl text-center leading-normal">
          United by the mission and with <br />
          <Highlight>
            trust,&nbsp;communication&nbsp;and&nbsp;will&nbsp;to&nbsp;learn,
          </Highlight>{" "}
          <br />
          our volunteer-based team works together and builds to achieve our
          mission!
        </h1>
        <br />
        <span className="flex justify-center">
          <Button href="/">Join&nbsp;our&nbsp;team&nbsp;&rarr;</Button>
        </span>
        <div>
          <h2>Our Advisors</h2>
          <div className="grid">
            <TeamCard
              src="/team/belle.png"
              name="Belle"
              position="Lead Director"
            />
          </div>

          <h2>Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <TeamCard
              src="/team/belle.png"
              name="Belle"
              position="Lead Director"
            />
            <TeamCard
              src="/team/belle.png"
              name="Belle"
              position="Lead Director"
            />
            <TeamCard
              src="/team/belle.png"
              name="Belle"
              position="Lead Director"
            />
            <TeamCard
              src="/team/belle.png"
              name="Belle"
              position="Lead Director"
            />
            <TeamCard
              src="/team/belle.png"
              name="Belle"
              position="Lead Director"
            />
            <TeamCard
              src="/team/belle.png"
              name="Belle"
              position="Lead Director"
            />
            <TeamCard
              src="/team/belle.png"
              name="Belle"
              position="Lead Director"
            />
            <TeamCard
              src="/team/belle.png"
              name="Belle"
              position="Lead Director"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
