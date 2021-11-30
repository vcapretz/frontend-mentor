/* eslint-disable @next/next/no-page-custom-font */
import Image from "next/image";
import Head from "next/head";

const ClockIcon = () => (
  <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
      fill="currentColor"
    />
  </svg>
);

const EthereumIcon = () => (
  <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
      fill="currentColor"
    />
  </svg>
);

export default function NftPreviewCard() {
  return (
    <div className="bg-[#0d192b] flex justify-center items-center min-h-screen w-full font-display">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-[#14253d] rounded-xl p-6 max-w-xs">
        <a href="#" className="nft-link">
          <Image
            src="/nft-preview-card-component/image-equilibrium.jpg"
            width={604}
            height={604}
            alt="Equilibrium #3429"
            className="rounded-lg"
          />
        </a>

        <a className="text-white hover:text-[#00fff7] cursor-pointer">
          <h2 className="font-semibold text-lg mt-4">Equilibrium #3429</h2>
        </a>

        <p className="mt-4 text-[#8bacda] font-light">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="flex justify-between mt-4">
          <span className="inline-flex items-center gap-2 text-[#00fff7]">
            <EthereumIcon />
            0.041 ETH
          </span>

          <span className="inline-flex items-center gap-2 text-[#8bacda]">
            <ClockIcon /> 3 days left
          </span>
        </div>
        <div className="text-[#2f415b] my-4 w-full border-t border-current" />

        <div className="flex items-center gap-3">
          <div className="flex border-[1px] border-white rounded-full">
            <Image
              src="/nft-preview-card-component/image-avatar.png"
              alt="Jules Wyvern's avatar"
              width={30}
              height={30}
            />
          </div>

          <span className="text-[#8bacda]">
            Creation of{" "}
            <a href="#" className="text-white hover:text-[#00fff7]">
              Jules Wyvern
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
