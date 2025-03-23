import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 // Helps catch potential issues in development
  reactStrictMode: true, // Ensure this is enabled
  typescript: {
    ignoreBuildErrors: false, // Ensure TypeScript errors are not ignored
  },
  output: "standalone", // Prevents build errors due to pre-rendering issues
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com", pathname: "/**" },
      { protocol: "https", hostname: "www.huffshoneyfarm.com", pathname: "/**" },
      { protocol: "https", hostname: "images-na.ssl-images-amazon.com", pathname: "/**" },
      { protocol: "https", hostname: "www.pazzox.nl", pathname: "/**" },
      { protocol: "https", hostname: "c7.alamy.com", pathname: "/**" },
      { protocol: "https", hostname: "incidecoder-content.storage.googleapis.com", pathname: "/**" },
      { protocol: "https", hostname: "britiscientific.com", pathname: "/**" },
      { protocol: "https", hostname: "s.alicdn.com", pathname: "/**" },
      { protocol: "https", hostname: "ases.in", pathname: "/**" },
      { protocol: "https", hostname: "accuchem.in", pathname: "/**" },
      { protocol: "https", hostname: "skinkraft.com", pathname: "/**" },
      { protocol: "https", hostname: "www.forestessentialsindia.com", pathname: "/**" },
      { protocol: "https", hostname: "images.pexels.com", pathname: "/**" },
      { protocol: "https", hostname: "cdn-prod.medicalnewstoday.com", pathname: "/**" },
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "/**" },
      { protocol: "https", hostname: "5.imimg.com", pathname: "/**" },
      { protocol: "https", hostname: "smhs.gwu.edu", pathname: "/**" },
    ],
    domains: [
      "images.unsplash.com",
      "scimplify.com",
      "www.scimplify.com",
      "cdn.scimplify.com",
      "www.netmeds.com",
      "netmeds.com",
      "pharmeasy.in",
      "zenerics.in",
      "www.apollopharmacy.in",
      "apollopharmacy.in",
      "www.truemeds.in",
      "truemeds.in",
      "www.1mg.com",
      "cdn01.pharmeasy.in",
      "zenerics.gumlet.io",
      "images.apollo247.in",
      "assets.truemeds.in",
      "onemg.gumlet.io",
      "www.norex.in",
      "www.etsy.com",
      "www.cookist.com",
      "www.alibaba.com",
      "weaveskart.com",
      "staticcookist.akamaized.net",
      "m.media-amazon.com",
      "www.upwellness.com",
      "c7.alamy.com",
      "herbalcacao.com",
      "i-cf65.ch-static.com",
      "d2jx2rerrg6sh3.cloudfront.net",
      "media.istockphoto.com",
      "onemg.gumlet.io",
      "magicpills.in",
      "img.freepik.com",
      "plus.unsplash.com",
      "tbcdn.talentbrew.com",
      "t3.ftcdn.net",
    ],
  },
};

export default nextConfig;
