import Head from "next/head";

export default function Meta({ title }) {
  const description =
    "Command Tech is a student-led nonprofit, striving to bring equity in tech to students of marginalized genders anywhere in the world.";
  const keywords = "stem, hackathon, mentorship, coding";
  const author = "Command Tech";
  const twitter = "@CommandTech";
  const image = "";
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{title} — Command Tech</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:url" content="commandtech.dev" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
    </Head>
  );
}
