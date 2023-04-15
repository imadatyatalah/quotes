import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const font = fetch(
  new URL(
    "../../../public/fonts/PlusJakartaSans-BoldItalic.ttf",
    import.meta.url
  )
).then((res) => res.arrayBuffer());

const generateImageQuote = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);

    const fontData = await font;

    const quote = searchParams.get("quote");
    const author = searchParams.get("author");
    const height = Number(searchParams.get("height") || 1080);
    const width = Number(searchParams.get("width") || 1920);

    return new ImageResponse(
      (
        <div
          style={{
            background: "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%)",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontFamily: '"plus_jakarta_sans"',
            padding: "0px 100px",
          }}
        >
          <p style={{ fontSize: "72px", color: "white", fontWeight: "600" }}>
            “{quote}”
          </p>
          <p style={{ fontSize: "32px", color: "white" }}>{author}</p>
        </div>
      ),
      {
        height: height,
        width: width,
        fonts: [
          {
            name: "plus_jakarta_sans",
            data: fontData,
            style: "normal",
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);

    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
};

export default generateImageQuote;
