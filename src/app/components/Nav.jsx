const Nav = () => {
  return (
    <>
     <div className="justify-between items-start bg-white self-stretch flex w-full gap-5 pl-7 pr-4 py-2.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:pl-5">
        <img
          loading="lazy"
          src="/food-network 1.svg"
          className="aspect-[2] object-contain object-center w-[72px] overflow-hidden self-center max-w-full my-auto"
        />
        <div className="justify-between items-start self-stretch bg-white flex w-[390px] max-w-full gap-5 pl-4 pr-1 py-1 rounded-lg border-2 border-solid border-gray-100">
          <div className="text-stone-950 text-xs my-auto">Search Best Food</div>
          <div className="items-start bg-opacity-10 flex w-8 max-w-full flex-col rounded-md border-2 border-solid border-orange-600 border-opacity-10">
            <img
              loading="lazy"
              src="/searchIcon.svg"
              className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
            />
          </div>
        </div>
        <div className="justify-between items-start self-center flex w-36 max-w-full gap-5 my-auto max-md:justify-center">
          <img
            loading="lazy"
            src="/Frame 767.svg"
            className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden flex-1"
          />
          <img
            loading="lazy"
            src="/Frame 769.svg"
            className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden flex-1"
          />
          <img
            loading="lazy"
            src="/Frame 765.svg"
            className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden flex-1"
          />
        </div>
      </div>
    </>
  )
}

export default Nav;