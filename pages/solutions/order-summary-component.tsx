/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";

const MusicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
    <g fill="none" fillRule="evenodd">
      <circle cx="24" cy="24" r="24" fill="#DFE6FB" />
      <path
        fill="#717FA6"
        fillRule="nonzero"
        d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"
      />
    </g>
  </svg>
);

export default function OrderSummary() {
  return (
    <div className="font-redHat min-h-screen flex items-center justify-center bg-[#e0e8ff] bg-order-mobile bg-contain sm:bg-order-desktop bg-no-repeat">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="rounded-2xl shadow bg-white flex flex-col items-center max-w-sm text-center">
        <Image
          src="/order-summary-component/illustration-hero.svg"
          alt="Illustration of a person listening to music"
          width={450}
          height={220}
          className="rounded-t-2xl w-full"
        />

        <div className="p-8">
          <h2 className="font-black text-3xl">Order Summary</h2>

          <p className="mt-6 mb-8 text-[#7280a7] font-medium">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>

          <div className="flex items-center justify-between w-full rounded-2xl bg-[#f5f7ff] p-4">
            <MusicIcon />

            <div className="flex flex-1 flex-col text-left ml-4">
              <span className="font-bold">Annual Plan</span>
              <span className="text-[#7280a7]">$59.99/year</span>
            </div>

            <a
              href="#"
              className="underline text-[#3829e0] hover:no-underline hover:text-[#7280a7] "
            >
              Change
            </a>
          </div>

          <button className="rounded-lg w-full mt-6 mb-4 font-medium text-white bg-[#3829e0] p-3 transition-colors hover:bg-[#7280a7]">
            Proceed to Payment
          </button>

          <button className="p-3 text-[#7280a7] w-full hover:text-[#1f2f56] font-medium">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
}
