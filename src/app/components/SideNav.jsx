"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SideNav = () => {
  const router = useRouter();
  return (
    <>
      <div className="md:flex flex-col items-stretch w-[4%] max-md:w-full max-md:ml-0 hidden fixed left-0 top-16">
        <div className="justify-center items-center bg-white md:flex max-h-screen flex-col mx-auto py-64 px-4 rounded-xl max-md:py-24 hidden">
          <div className="items-center self-stretch flex mb-0 flex-col space-y-14 max-md:mb-2.5">
            <Link href={"/"}>
              <div className="bg-gray-500 rounded-lg bg-opacity-10">
                <img className="w-full h-full" src="/icons_emp.svg" />
              </div>
            </Link>

            <Link href={"/another"}>
              <div className="bg-gray-500 rounded-lg bg-opacity-10">
                <img src="/icons-1.svg" />
              </div>
            </Link>
            <Link href={"/another"}>
              <div className="bg-gray-500 rounded-lg bg-opacity-10">
                <img src="/icons-2.svg" />
              </div>
            </Link>
            <Link href={"/another"}>
              <div className="bg-gray-500 rounded-lg bg-opacity-10">
                <img src="/icons-3.svg" />
              </div>
            </Link>
            <Link href={"/another"}>
              <div className="bg-gray-500 rounded-lg bg-opacity-10">
                <img src="/icons-4.svg" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
