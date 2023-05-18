import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative isolate flex min-h-screen flex-col items-center justify-center bg-white">
        <svg className="pattern-mask welcome-bg-animation absolute inset-0 -z-10 h-full w-full stroke-[#e5e7eb]">
          <defs>
            <pattern
              id="pattern"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#pattern)"
          />
        </svg>
        <div className="welcome-animation flex flex-col items-center space-y-5 rounded-2xl bg-white/60 px-6 py-12 text-center shadow-md filter backdrop-blur-xl">
          <Link href="https://github.com/varkaria" target="_blank">
            <Image
              src="https://avatars.githubusercontent.com/u/61514399"
              width={64}
              height={64}
              alt="Varkaria"
              className="mx-auto rounded-full transition-all hover:scale-[.98] active:scale-95"
            />
          </Link>
          <h1 className="max-w-sm text-4xl font-semibold text-gray-800">
            Welcome to Varkaria Next.js Template
          </h1>
          <p className="max-w-md text-base text-gray-600">
            Get started by editing{" "}
            <code className="rounded-md bg-gray-100 p-1 font-mono">
              pages/index.tsx
            </code>{" "}
            or you can try example auth page
          </p>
          <div className="flex space-x-4">
            <Link
              href="/auth/signin"
              className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              Try sign-in
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
