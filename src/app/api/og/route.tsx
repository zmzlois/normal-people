import { ImageResponse } from "@vercel/og";

import { Templ } from "@/components/assets/temple";
import { Grid } from "@/components/assets/grid";
import { fetchFont } from "@/utils/fetchFont";
import { Signature } from "@/components/assets/signature";

// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET(request: Request) {
  const [inter900, inter700, inter400] = await Promise.all([
    fetchFont("Inter", 900),
    fetchFont("Inter", 700),
    fetchFont("Inter", 400),
  ]);

  try {
    const { searchParams } = new URL(request.url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : "Blog";

    return new ImageResponse(
      (
        <div tw="bg-black h-full w-full text-white bg-cover justify-center flex flex-col  pt-10 pb-10 px-16">
          <Grid />
          <div tw="flex flex-col items-center gap-2 py-8 px-10">
            {" "}
            <div tw="font-black font-2xl text-8xl">{title}</div>
          </div>{" "}
          <div tw="flex flex-col items-end gap-2 py-8 px-10">
            <Signature />
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          { name: "Inter", data: inter900, weight: 900 },
          { name: "Inter", data: inter700, weight: 700 },
          { name: "Inter", data: inter400, weight: 400 },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
