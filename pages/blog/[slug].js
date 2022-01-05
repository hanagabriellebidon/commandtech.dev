import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Nav from "../../components/Nav";

export default function Post({
  frontmatter: { title, date, image },
  slug,
  content,
}) {
  return (
    <div className="flex flex-col items-center min-h-screen text-navy dark:text-white dark:bg-navy">
      <Nav />
      <div className="btn">
        <Link href="/blog">Go Back</Link>
      </div>
      <div className="container-copy">
        <h1 className="headline font-montserrat font-bold">{title}</h1>
        <p className="text-lg pb-2">Published on {date}</p>
        {image ? (
          <Image src={image} width={1600} height={900} alt="title" />
        ) : (
          ""
        )}
        <main className="py-8 px-2 md:px-0">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </main>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
