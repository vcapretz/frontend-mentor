import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
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
          <li>
            <Link href="/solutions/nft-preview-card-component">
              <a className="inline-flex items-center gap-2 hover:text-gray-700 font-semibold">
                NFT preview card component{" "}
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
        </ul>
      </main>
    </div>
  );
};

export default Home;
