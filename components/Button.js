import Link from "next/link";
export default function Button({ href, children }) {
  return (
    <Link href={href}>
      <div class="border-2 rounded-full border-navy dark:border-white cursor-pointer px-6 py-2">
        {children}
      </div>
    </Link>
  );
}
