const AnotherPage = () => {
  return (
    <>
      <div className="bg-white flex flex-col">
        <div className="self-stretch w-full px-5 max-md:max-w-full">
          <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[4%] max-md:w-full max-md:ml-0">
              <div className="justify-center items-center bg-white md:flex max-h-screen flex-col mx-auto py-64 px-4 rounded-xl max-md:py-24 hidden">
                <div className="items-center self-stretch flex mb-0 flex-col space-y-14 max-md:mb-2.5">
                  <div className="bg-gray-500 rounded-lg bg-opacity-10">
                    <img className="w-full h-full" src="/icons.svg" alt="" srcSet="" />
                  </div>

                  <div className="bg-gray-500 rounded-lg bg-opacity-10">
                    <img src="/icons (1).svg" alt="" srcSet="" />
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
            <div className="flex flex-col items-stretch w-[96%] ml-5 max-md:w-full max-md:ml-0 ">
              <div className="bg-gray-100 grow w-full mx-auto pl-4 pr-3.5 pt-3 pb-12 rounded-3xl max-md:max-w-full">
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-between flex-col gap-y-6">
                    <img src="/image 1.svg" className=" object-contain" alt="" />
                    <p className="font-semibold text-lg">This page is empty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnotherPage;
