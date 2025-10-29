import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const secret = req.query.secret;
  if (secret !== process.env.STORYBLOK_TOKEN)
    return res.status(401).json({ message: "Invalid token" });

  try {
    const slug = (req.body?.story?.full_slug as string) || "home";
    // revalidate home e la pagina modificata
    await res.revalidate("/");
    await res.revalidate(`/${slug}`);
    return res.json({ revalidated: true, slug });
  } catch (e) {
    return res
      .status(500)
      .json({ revalidated: false, error: (e as Error).message });
  }
}
