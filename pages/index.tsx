import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import { promises as fs } from "fs";

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  fileNames,
}) => {
  return (
    <div className="">
      <Head>
        <title>Frontend Mentor by @vcapretz</title>
        <meta name="description" content="Code challenges by @vcapretz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-xl">
          Frontend Mentor solutions by{" "}
          <a
            className=" hover:text-gray-700 font-semibold"
            href="https://twitter.com/vcapretz"
            target="_blank"
            rel="noreferrer"
          >
            @vcapretz
          </a>
          :
        </h1>

        <ul className="mt-4">
          {fileNames.map((fileName) => (
            <li key={fileName}>
              <Link href={`/solutions/${fileName}`}>
                <a className="inline-flex items-center gap-2 hover:text-gray-700 font-semibold">
                  {fileName}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 ml-1"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                    />
                  </svg>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{ fileNames: string[] }> =
  async () => {
    const postsDirectory = path.join(process.cwd(), "pages/solutions");
    const fileNames = await fs.readdir(postsDirectory);

    return {
      props: {
        fileNames: fileNames.map((fileName) => fileName.split(".")[0]),
      },
    };
  };

export default Home;
