import MobileFooter from "./MobileFooter";
import Nav from "./Nav";
import SideNav from "./SideNav";

const TwoNavLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="flex">
          <SideNav />
          {children}
      </div>
      <MobileFooter />
    </>
  );
};

export default TwoNavLayout;
