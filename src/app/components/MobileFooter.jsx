const MobileFooter = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 w-full">
        <div className="bg-white h-[70px]  flex items-center justify-center rounded-tr-lg rounded-tl-lg mt-5 md:hidden">
          <div className=" py-8 flex w-full px-6 items-center space-x-5 justify-between">
            <div className="bg-gray-500 rounded-lg bg-opacity-10">
              <img className="w-full h-full" src="/icons.svg" alt="" srcSet="" />
            </div>
            <div className="bg-gray-500 rounded-lg bg-opacity-10">
              <img src="/icons-1.svg" alt="" srcSet="" />
            </div>
            <div className="bg-gray-500 rounded-lg bg-opacity-10">
              <img src="/icons-2.svg" alt="" srcSet="" />
            </div>
            <div className="bg-gray-500 rounded-lg bg-opacity-10">
              <img src="/icons-3.svg" alt="" srcSet="" />
            </div>
            <div className="bg-gray-500 rounded-lg bg-opacity-10">
              <img src="/icons-4.svg" alt="" srcSet="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFooter;
