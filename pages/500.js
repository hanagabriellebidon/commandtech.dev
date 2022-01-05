import Link from "next/link";
export default function ServerError() {
  return (
    <div className="text-center min-h-full my-auto flex flex-col items-center">
      <h1 className="ultratitle">500 Internal Server Error</h1>
      <Link href="/" passHref>
        <a className="btn">Return Home</a>
      </Link>
    </div>
  );
}
