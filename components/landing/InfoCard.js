import Icon from "supercons";
import Link from "next/link";
export default function InfoCard({ destination, heading, copy }) {
  return (
    <>
      <Link href={destination}>
        <div className="mx-auto w-full cursor-pointer border-2 border-navy rounded-xl dark:border-white  px-4 py-3 max-w-sm transition ease-in-out delay-150 hover:scale-110 hover:-translate-y-1 duration-300">
          <Icon glyph="external" size={35} className="float-right" />
          <h4 className="font-bold text-xl pt-5 pb-3">{heading}</h4>

          <p>{copy}</p>
        </div>
      </Link>
    </>
  );
}
