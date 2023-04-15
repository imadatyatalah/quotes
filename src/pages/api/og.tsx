import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const fontBoldItalic = fetch(
  new URL(
    "../../../public/fonts/PlusJakartaSans-BoldItalic.ttf",
    import.meta.url
  )
).then((res) => res.arrayBuffer());

const fontSemiBold = fetch(
  new URL("../../../public/fonts/PlusJakartaSans-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const generateImageQuote = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);

    const fontDataBoldItalic = await fontBoldItalic;
    const fontDataSemiBold = await fontSemiBold;

    const quote = searchParams.get("quote");
    const author = searchParams.get("author");
    const height = Number(searchParams.get("height") || 1080);
    const width = Number(searchParams.get("width") || 1920);

    return new ImageResponse(
      (
        <div
          style={{
            background: "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0px 100px",
          }}
        >
          <p
            style={{
              fontSize: "72px",
              color: "white",
              fontWeight: "600",
              fontFamily: '"PlusJakartaSans-BoldItalic"',
            }}
          >
            “{quote}”
          </p>
          <p
            style={{
              fontFamily: '"PlusJakartaSans-SemiBold"',
              fontSize: "32px",
              color: "white",
            }}
          >
            {author}
          </p>

          <p
            style={{
              fontFamily: '"PlusJakartaSans-SemiBold"',
              fontSize: "32px",
              color: "white",
              position: "absolute",
              right: "100px",
              bottom: "100px",
              textDecoration: "underline",
            }}
          >
            quotes.imadatyat.me
          </p>
        </div>
      ),
      {
        height: height,
        width: width,
        fonts: [
          {
            name: "PlusJakartaSans-BoldItalic",
            data: fontDataBoldItalic,
            style: "italic",
          },
          {
            name: "PlusJakartaSans-SemiBold",
            data: fontDataSemiBold,
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
