import { sortByDate } from "../../utils/byDate";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import Meta from "../../components/Meta";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default function BlogIndex({ posts }) {
  return (
    <div className="flex flex-col items-center min-h-screen text-navy dark:text-white dark:bg-navy">
      <Meta title="Home" />
      <Nav />

      <div className="container mb-16">
        <h1 className="headline font-bold">Blog</h1>

        <div className="">
          {posts.map((post, index) => (
            <div className="flex flex-row items-center space-x-8" key={index}>
              <div className="w-32">{post.frontmatter.date}</div>
              <div className="flex flex-col w-1/2">
                <p className="font-bold font-montserrat text-xl">
                  {post.frontmatter.title}
                </p>
                <p>{post.frontmatter.description}</p>
              </div>
              <div className="justify-end">
                <Link href={`/blog/${post.slug}`}>
                  <a className="btn">Read More</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    // Get slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
