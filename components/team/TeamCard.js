import Image from "next/image";

export default function TeamCard({ src, name, position }) {
  return (
    <div className="border-4 border-navy dark:border-white rounded-xl p-4">
      <div className="flex justify-center">
        <Image src={src} width={150} height={150} />
      </div>
      <br />
      <span className="uppercase">{position}</span>
      <br />
      <span>{name}</span>
    </div>
  );
}
