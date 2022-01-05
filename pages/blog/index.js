import { sortByDate } from "../../utils/byDate";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";

export default function BlogIndex({ posts }) {
  return (
    <div>
      <h1>Command tech blog</h1>

      <div className="posts">
        {posts.map((post, index) => (
          <div className="card" key={index}>
            {/* <img src={post.frontmatter.image} alt="" /> */}

            <div className="post-date">Posted on {post.frontmatter.date}</div>

            <h3>{post.frontmatter.title}</h3>

            <p>{post.frontmatter.description}</p>

            <Link href={`/blog/${post.slug}`}>
              <a className="btn">Read More</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    // Generate slug
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
