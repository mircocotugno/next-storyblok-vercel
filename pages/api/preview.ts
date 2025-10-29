import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.query._storyblok_tk || req.query.token;
  if (token !== process.env.STORYBLOK_TOKEN)
    return res.status(401).end("Invalid token");

  // Abilita preview + redirect all’URL richiesto dallo Storyblok editor
  res.setPreviewData({});
  const slug = (req.query.slug as string) || "home";
  res.writeHead(307, { Location: `/${slug}` });
  res.end();
}
