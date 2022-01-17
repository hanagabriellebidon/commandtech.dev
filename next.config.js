const nextConfig = {
  trailingSlash: true,
  pageExtensions: ["js", "jsx", "mdx"],
  images: {
    domains: ["dl.airtable.com", "emoji.slack-edge.com", "github.com"],
  },
  async redirects() {
    return [
      {
        source: "/resources",
        destination: "https://github.com",
        permanent: false,
      },
      {
        source: "/meow",
        destination: "https://github.com/eilla1.png",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/advisors",
        destination: "https://v1.commandtech.dev/advisors.html",
      },
      //   {
      //     source: "/team",
      //     destination: "https://v1.commandtech.dev/team.html",
      //   },
      {
        source: "/clubs",
        destination: "https://v1.commandtech.dev/clubs.html",
      },
    ];
  },
};

module.exports = nextConfig;
