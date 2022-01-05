import Link from "next/link";
export default function NotFound() {
  return (
    <div className="text-center min-h-full my-auto flex flex-col items-center">
      <h1 className="ultratitle">404</h1>
      <Link href="/" passHref>
        <a className="btn">Return Home</a>
      </Link>
    </div>
  );
}
