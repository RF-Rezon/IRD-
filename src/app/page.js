import LandingPage from "./components/LandingPage";
import MobileFooter from "./components/MobileFooter";
import Nav from "./components/nav";

export default function Home() {
  return (
   <>
   <div className="relative">
     <Nav />
     <LandingPage />
     <MobileFooter />
   </div>
   </>
  )
}
