import Link from "next/link";

const MobileFooter = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 w-full">
        <div className="bg-white h-[70px]  flex items-center justify-center rounded-tr-lg rounded-tl-lg mt-5 md:hidden">
          <div className=" py-8 flex w-full px-6 items-center space-x-5 justify-between">
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

export default MobileFooter;
