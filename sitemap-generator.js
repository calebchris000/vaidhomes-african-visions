// sitemap-generator.js
import pkg from "sitemap";
import fs from "fs";

const { createSitemap } = pkg;

const urls = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/contact", changefreq: "weekly", priority: 0.8 },
  // Add all your other routes here
];

const sm = createSitemap({
  hostname: "https://vaidhomes.com",
  urls: urls,
});

fs.writeFileSync("./public/sitemap.xml", sm.toString());
