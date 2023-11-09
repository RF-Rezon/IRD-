"use client";
import { useRouter } from "next/navigation";

const AnotherPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="bg-white w-full flex h-screen items-center justify-center">
        <div className="flex items-center flex-col gap-y-10">
          <img src="/image 1.svg" className=" object-contain" alt="" />
          <p className="font-semibold text-lg">This page is empty</p>
          <a
            className="inline-block rounded-lg bg-orange-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-orange-600"
            onClick={() => router.push("/")}
          >
            👈🏻 Go to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default AnotherPage;
