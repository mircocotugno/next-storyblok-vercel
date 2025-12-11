import { Html, Head, Main, NextScript } from "next/document";
import { fontSans, fontSerif } from "@/config/font";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={`font-sans antialiased ${fontSans.variable} ${fontSerif.variable}`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
