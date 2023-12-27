export default async function sitemap() {
  let routes = ["", "/random"].map((route) => ({
    url: `https://quotes.imadatyat.me${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
