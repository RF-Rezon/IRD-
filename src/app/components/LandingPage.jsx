"use client";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="bg-white flex flex-col">
        <div className="self-stretch w-full px-5 max-md:max-w-full">
          <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[4%] max-md:w-full max-md:ml-0">
              <div className="justify-center items-center bg-white md:flex max-h-screen flex-col mx-auto py-64 px-4 rounded-xl max-md:py-24 hidden">
                <div className="items-center self-stretch flex mb-0 flex-col space-y-14 max-md:mb-2.5">
                  <div className="bg-gray-500 rounded-lg bg-opacity-10">
                    <img className="w-full h-full" src="/icons.svg" onClick={() => router.push("/")}/>
                  </div>

                  <div className="bg-gray-500 rounded-lg bg-opacity-10">
                    <img
                      src="/icons-1.svg"
                      onClick={() => router.push("/another")}
                    />
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
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[17%] max-md:w-full max-md:ml-0">
                    <div className="items-center bg-white flex w-full max-w-[300px] flex-col mx-auto pl-4 pr-1 py-4 rounded-2xl max-md:mt-7">
                      <div className="items-start self-stretch bg-white flex w-full justify-between gap-2.5 pl-1 pr-4 py-1 rounded-xl border-2 border-solid border-orange-600 border-opacity-10">
                        <div className="text-orange-600 text-sm font-semibold self-stretch whitespace-nowrap justify-center items-center bg-orange-600 bg-opacity-10 flex-1 pl-11 pr-11 py-2.5 rounded-lg max-md:px-5">
                          Fruits
                        </div>
                        <div className="text-stone-950 text-sm self-stretch whitespace-nowrap justify-center items-center bg-white flex-1 pl-6 pr-7 py-2.5 rounded-lg max-md:px-5">
                          Vegetables
                        </div>
                      </div>
                      <div className="justify-between items-start self-stretch bg-white flex w-full gap-5 mt-4 pl-4 pr-1 py-1 rounded-lg border-2 border-solid border-gray-100">
                        <div className="text-stone-950 text-opacity-50 text-xs my-auto">
                          Search by Fruits Name
                        </div>
                        <div className="items-center bg-opacity-10 flex w-[35px] max-w-full flex-col rounded-md">
                          <img
                            loading="lazy"
                            src="/searchIcon.svg"
                            className="aspect-[1.28] object-contain object-center w-full overflow-hidden self-stretch"
                          />
                        </div>
                      </div>
                      <div className="self-stretch flex items-start justify-between gap-2 mt-4">
                        <div className="items-start flex flex-col grow shrink-0 basis-auto self-start">
                          <div className="self-stretch text-stone-950 text-xs font-medium">
                            Fruits List
                          </div>
                          <div className="items-start self-stretch flex grow flex-col mt-2.5">
                            <div className="items-center self-stretch flex w-full flex-col pl-2.5 pr-20 py-2 rounded-xl border-[1.5px] border-solid border-orange-600 max-md:pr-5">
                              <div className="items-start flex w-[129px] max-w-full justify-between gap-5 pl-2 py-2 self-start">
                                <img
                                  loading="lazy"
                                  src="/Frame 714.png"
                                  className="aspect-[0.98] object-contain object-center w-full overflow-hidden flex-1"
                                />
                                <div className="items-start self-center flex flex-col my-auto">
                                  <div className="self-stretch text-stone-950 text-sm font-medium leading-4 whitespace-nowrap">
                                    Oranges
                                  </div>
                                  <div className="self-stretch text-stone-950 text-opacity-70 text-xs whitespace-nowrap mt-2">
                                    Vitamin C
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="items-center self-stretch bg-white bg-opacity-10 flex w-full flex-col mt-1.5 pl-2.5 pr-20 py-2.5 rounded-lg max-md:pr-5">
                              <div className="items-start flex w-[127px] max-w-full justify-between gap-5 pl-2 py-2 self-start">
                                <img
                                  loading="lazy"
                                  src="/Frame 714 (1).png"
                                  className="aspect-[0.98] object-contain object-center w-full overflow-hidden flex-1"
                                />
                                <div className="items-start self-center flex flex-col my-auto">
                                  <div className="self-stretch text-stone-950 text-sm font-medium leading-4 whitespace-nowrap">
                                    Apples
                                  </div>
                                  <div className="self-stretch text-stone-950 text-opacity-70 text-xs whitespace-nowrap mt-2">
                                    Vitamin C
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="items-center self-stretch bg-white bg-opacity-10 flex w-full flex-col mt-1.5 pl-2.5 pr-20 py-2.5 rounded-lg max-md:pr-5">
                              <div className="items-start flex w-[134px] max-w-full justify-between gap-5 pl-2 py-2 self-start">
                                <img
                                  loading="lazy"
                                  src="/Frame 714 (2).png"
                                  className="aspect-[0.98] object-contain object-center w-full overflow-hidden flex-1"
                                />
                                <div className="items-start self-center flex flex-col my-auto">
                                  <div className="self-stretch text-stone-950 text-sm font-medium leading-4 whitespace-nowrap">
                                    Avocado
                                  </div>
                                  <div className="self-stretch text-stone-950 text-opacity-70 text-xs whitespace-nowrap mt-2">
                                    Vitamin B6
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="items-center self-stretch bg-white bg-opacity-10 flex w-full flex-col mt-1.5 pl-2.5 pr-20 py-2.5 rounded-lg max-md:pr-5">
                              <div className="items-start flex w-[158px] max-w-full justify-between gap-5 pl-2 py-2 self-start">
                                <img
                                  loading="lazy"
                                  src="/Frame 714 (2).png"
                                  className="aspect-[0.98] object-contain object-center w-[42px] overflow-hidden self-stretch max-w-full"
                                />
                                <div className="items-start self-center flex flex-col my-auto">
                                  <div className="self-stretch text-stone-950 text-sm font-medium leading-4 whitespace-nowrap">
                                    Strawberries
                                  </div>
                                  <div className="self-stretch text-stone-950 text-opacity-70 text-xs mt-2">
                                    Vitamin C
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="items-center self-stretch bg-white bg-opacity-10 flex w-full flex-col mt-1.5 pl-2.5 pr-20 py-2.5 rounded-lg max-md:pr-5">
                              <div className="items-start flex w-[142px] max-w-full justify-between gap-5 pl-2 py-2 self-start">
                                <img
                                  loading="lazy"
                                  src="/Frame 714 (2).png"
                                  className="aspect-square object-contain object-center w-[42px] overflow-hidden self-stretch max-w-full"
                                />
                                <div className="items-start self-center flex flex-col my-auto">
                                  <div className="self-stretch text-stone-950 text-sm font-medium leading-4">
                                    Mangoes
                                  </div>
                                  <div className="self-stretch text-stone-950 text-opacity-70 text-xs whitespace-nowrap mt-2">
                                    Vitamin A, C
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="items-center self-stretch bg-white bg-opacity-10 flex w-full flex-col mt-1.5 pl-2.5 pr-20 py-2.5 rounded-lg max-md:pr-5">
                              <div className="items-start flex w-[149px] max-w-full justify-between gap-5 pl-2 py-2 self-start">
                                <img
                                  loading="lazy"
                                  src="/Frame 714 (2).png"
                                  className="aspect-square object-contain object-center w-[42px] overflow-hidden self-stretch max-w-full"
                                />
                                <div className="items-start self-center flex flex-col my-auto">
                                  <div className="self-stretch text-stone-950 text-sm font-medium leading-4 whitespace-nowrap">
                                    Blueberries
                                  </div>
                                  <div className="self-stretch text-stone-950 text-opacity-70 text-xs whitespace-nowrap mt-2">
                                    Vitamin C, K
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="items-center self-stretch bg-white bg-opacity-10 flex w-full flex-col mt-1.5 pl-2.5 pr-20 py-2.5 rounded-lg max-md:pr-5">
                              <div className="items-start flex w-[142px] max-w-full justify-between gap-5 pl-2 py-2 self-start">
                                <img
                                  loading="lazy"
                                  src="/Frame 714 (2).png"
                                  className="aspect-square object-contain object-center w-[42px] overflow-hidden self-stretch max-w-full"
                                />
                                <div className="items-start self-center flex flex-col my-auto">
                                  <div className="self-stretch text-stone-950 text-sm font-medium leading-4">
                                    Grapes
                                  </div>
                                  <div className="self-stretch text-stone-950 text-opacity-70 text-xs whitespace-nowrap mt-2">
                                    Vitamin C, K
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="items-center self-stretch bg-white bg-opacity-10 flex w-full flex-col mt-1.5 pl-2.5 pr-20 py-2.5 rounded-lg max-md:pr-5">
                              <div className="items-start flex w-[146px] max-w-full justify-between gap-5 pl-2 py-2 self-start">
                                <img
                                  loading="lazy"
                                  src="/Frame 714 (2).png"
                                  className="aspect-square object-contain object-center w-[42px] overflow-hidden self-stretch max-w-full"
                                />
                                <div className="items-start self-center flex flex-col my-auto">
                                  <div className="self-stretch text-stone-950 text-sm font-medium leading-4 whitespace-nowrap">
                                    Pineapples
                                  </div>
                                  <div className="self-stretch text-stone-950 text-opacity-70 text-xs whitespace-nowrap mt-2">
                                    Vitamin C, K
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-100 w-[8px] mx-1 h-[89px] basis-auto mt-36 self-start max-md:mt-10" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[66%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="self-stretch bg-white w-full mx-auto p-11 rounded-xl max-md:max-w-full max-md:mt-7 max-md:px-5">
                      {/* <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"> */}
                      <div className="gap-5 flex flex-col md:flex-row">
                        <div className="w-[3%] max-md:w-full max-md:ml-0 order-2 md:order-1">
                          <div className="items-start flex flex-row md:flex-col mt-16 max-md:mt-10 gap-x-10">
                            <img
                              loading="lazy"
                              src="/facebook.svg"
                              className="aspect-square object-contain object-center w-full overflow-hidden self-stretch mt-6"
                            />
                            <img
                              loading="lazy"
                              src="/linkedin.svg"
                              className="aspect-square object-contain object-center w-full overflow-hidden self-stretch mt-6"
                            />
                            <img
                              loading="lazy"
                              src="/twitter.svg"
                              className="aspect-square object-contain object-center w-full overflow-hidden self-stretch mt-6"
                            />
                            <img
                              loading="lazy"
                              src="/link.svg"
                              className="aspect-square object-contain object-center w-full overflow-hidden self-stretch grow mt-6"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col w-[97%] ml-5 max-md:w-full max-md:ml-0 order-1 md:order-2">
                          <div className="justify-center items-start flex flex-col max-md:max-w-full max-md:mt-10">
                            <div className="justify-center items-start self-center flex w-full max-w-[1032px] flex-col max-md:max-w-full">
                              <div className="self-stretch max-md:max-w-full">
                                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                  <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
                                    <div className="items-start flex grow flex-col max-md:max-w-full max-md:mt-8">
                                      <div className="text-neutral-800 text-4xl font-black leading-[49.4px] capitalize self-stretch max-md:max-w-full">
                                        Health benefits of an avocado
                                      </div>
                                      <div className="items-start self-stretch flex flex-col mt-8 rounded-xl max-md:max-w-full">
                                        <div className="text-neutral-800 text-lg font-bold leading-7 self-stretch whitespace-nowrap max-md:max-w-full">
                                          Supports eye health:{" "}
                                        </div>
                                        <div className="self-stretch text-neutral-800 text-base leading-6 mt-4 max-md:max-w-full">
                                          Spinach contains high levels of
                                          vitamin A and other antioxidants that
                                          help maintain healthy vision and
                                          protect against age-related macular
                                          degeneration.
                                        </div>
                                      </div>
                                      <div className="items-start self-stretch flex grow flex-col mt-8 rounded-xl max-md:max-w-full">
                                        <div className="text-neutral-800 text-lg font-bold leading-7 self-stretch whitespace-nowrap max-md:max-w-full">
                                          Supports eye health:{" "}
                                        </div>
                                        <div className="self-stretch text-neutral-800 text-base leading-6 mt-4 max-md:max-w-full">
                                          Spinach contains high levels of
                                          vitamin A and other antioxidants that
                                          help maintain healthy vision and
                                          protect against age-related macular
                                          degeneration.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-stretch ml-5 max-md:w-full max-md:ml-0 w-full h-full my-auto">
                                    <img
                                      loading="lazy"
                                      src="/name.png"
                                      className="object-contain w-full h-full max-md:mt-8"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="items-start self-stretch flex flex-col mt-11 rounded-xl max-md:max-w-full max-md:mt-10">
                                <div className="text-neutral-800 text-lg font-bold leading-7 self-stretch whitespace-nowrap max-md:max-w-full">
                                  Supports eye health:{" "}
                                </div>
                                <div className="self-stretch text-neutral-800 text-base leading-6 mt-4 max-md:max-w-full">
                                  Spinach contains high levels of vitamin A and
                                  other antioxidants that help maintain healthy
                                  vision and protect against age-related macular
                                  degeneration.. Spinach contains high levels of
                                  vitamin A and other antioxidants that help
                                  maintain healthy vision and protect against
                                  age-related macular degeneration.. Spinach
                                  contains high levels of vitamin A and other
                                  antioxidants that help maintain healthy vision
                                  and protect against age-related macular
                                  degeneration.. Spinach contains high levels of
                                  vitamin A and other antioxidants that help
                                  maintain healthy vision and protect against
                                  age-related macular degeneration.. Spinach
                                  contains high levels of vitamin A and other
                                  antioxidants that help maintain healthy vision
                                  and protect against age-related macular
                                  degeneration.. Spinach contains high levels of
                                  vitamin A and other antioxidants that help
                                  maintain healthy vision and protect against
                                  age-related macular degeneration.. Spinach
                                  contains high levels of vitamin A and other
                                  antioxidants that help maintain healthy vision
                                  and protect against age-related macular
                                  degeneration..{" "}
                                </div>
                              </div>
                              <div className="self-stretch mt-11 max-md:max-w-full max-md:mt-10">
                                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                  <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
                                    <img
                                      loading="lazy"
                                      src="/name (1).png"
                                      className="aspect-[1.63] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                                    />
                                  </div>
                                  <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
                                    <div className="items-start flex flex-col my-auto rounded-xl max-md:max-w-full max-md:mt-10">
                                      <div className="text-neutral-800 text-lg font-bold leading-7 self-stretch whitespace-nowrap max-md:max-w-full">
                                        Supports eye health:{" "}
                                      </div>
                                      <div className="self-stretch text-neutral-800 text-base leading-6 mt-4 max-md:max-w-full">
                                        Spinach contains high levels of vitamin
                                        A and other antioxidants that help
                                        maintain healthy vision and protect
                                        against age-related macular
                                        degeneration.. Spinach contains high
                                        levels of vitamin A and other
                                        antioxidants that help maintain healthy
                                        vision and protect against age-related
                                        macular degeneration.. Spinach contains
                                        high levels of vitamin A and other
                                        antioxidants that help maintain healthy
                                        vision and protect against age-related
                                        macular degeneration.. Spinach contains
                                        high levels of vitamin A and other
                                        antioxidants that help maintain healthy{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="justify-center items-start flex w-[180px] max-w-full grow flex-col mt-16 self-start max-md:mt-10">
                              <div className="text-neutral-800 text-lg font-black leading-9 tracking-normal capitalize self-stretch">
                                Was this helpful?
                              </div>
                              <div className="items-start self-stretch flex gap-2.5 mt-2.5 max-md:justify-center">
                                <img
                                  loading="lazy"
                                  src="/star.svg"
                                  className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                                />
                                <img
                                  loading="lazy"
                                  src="/star.svg"
                                  className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                                />
                                <img
                                  loading="lazy"
                                  src="/star.svg"
                                  className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                                />
                                <img
                                  loading="lazy"
                                  src="/star.svg"
                                  className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                                />
                                <img
                                  loading="lazy"
                                  src="/star.png"
                                  className="aspect-square object-contain object-center w-full opacity-50 overflow-hidden flex-1"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:flex flex-col items-stretch w-[17%] ml-5 max-md:w-full max-md:ml-0 hidden">
                    <div className="items-start bg-white flex w-full max-w-[300px] flex-col mx-auto px-4 py-3.5 rounded-xl max-md:mt-7">
                      <div className="items-center self-stretch flex w-full flex-col px-2.5 py-3.5 rounded-lg border-[1.5px] border-solid border-stone-950 border-opacity-10">
                        <div className="justify-between items-start self-stretch flex w-full gap-5">
                          <div className="items-start flex gap-4 self-start">
                            <img
                              loading="lazy"
                              src="/text-square.svg"
                              className="aspect-square object-contain object-center w-5 overflow-hidden max-w-full self-start"
                            />
                            <div className="text-orange-600 text-sm font-semibold whitespace-nowrap self-start">
                              Settings
                            </div>
                          </div>
                          <img
                            loading="lazy"
                            src="/Frame.svg"
                            className="aspect-square object-contain object-center w-[17px] overflow-hidden max-w-full self-start"
                          />
                        </div>
                        <div className="items-start self-stretch flex flex-col mt-6">
                          <div className="items-start self-stretch flex flex-col">
                            <div className="justify-between items-start self-stretch flex gap-0">
                              <div className="text-stone-950 text-sm font-medium self-stretch w-full">
                                Paragraph font size
                              </div>
                              <div className="text-orange-600 text-right text-xs font-medium self-stretch whitespace-nowrap">
                                19
                              </div>
                            </div>
                            <div className="items-start self-stretch flex grow flex-col mt-5">
                              <div className="self-stretch bg-stone-950 bg-opacity-10 flex w-full grow flex-col rounded-xl">
                                <div className="bg-orange-600 self-stretch flex w-full h-[3px] flex-col rounded-xl" />
                              </div>
                            </div>
                          </div>
                          <div className="items-start self-stretch flex flex-col mt-5">
                            <div className="self-stretch text-stone-950 text-sm font-medium">
                              Choose Vitamin Type
                            </div>
                            <div className="justify-between items-start self-stretch bg-stone-950 bg-opacity-10 flex w-full gap-5 mt-2.5 px-4 py-2.5 rounded-md">
                              <div className="text-stone-950 text-xs self-stretch">
                                All Vitamin
                              </div>
                              <img
                                loading="lazy"
                                src="/Vector 1.png"
                                className="aspect-square object-contain object-center w-3.5 overflow-hidden self-stretch max-w-full"
                              />
                            </div>
                          </div>
                          <div className="items-start self-stretch flex justify-between gap-2.5 mt-6 pr-px">
                            <div className="text-stone-950 text-sm font-medium">
                              Turn Off Subtitle
                            </div>
                            <div className="items-start border bg-gray-200 bg-opacity-10 self-stretch flex w-[34px] max-w-full flex-col pl-0.5 pr-5 py-0.5 rounded-xl border-solid border-black border-opacity-10">
                              <div className="bg-zinc-300 self-stretch flex w-full h-3.5 flex-col rounded-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default LandingPage;
