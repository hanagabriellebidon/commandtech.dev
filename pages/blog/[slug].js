import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";

export default function Post({
  frontmatter: { title, date, image },
  slug,
  content,
}) {
  return (
    <>
      <Link href="/blog">Go Back</Link>
      <div>
        <h1>title{title}</h1>
        <p>publish date{date}</p>
        {image ? <img src={image} alt="title" /> : ""}
        <main>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </main>
      </div>
    </>
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
