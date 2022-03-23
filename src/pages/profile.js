import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Facts from "../components/Homepage/Facts";
import Homepage from "../components/Homepage/Homepage";
import Process from "../components/Homepage/Process";
import { signIn, signOut, useSession } from "next-auth/react";
import Ytb from "../components/Ytb/Ytb";
import MobileOptions from "../components/Header/MobileOptions";
import Menu from "../components/Homepage/Menu";
import SignInDropDown from "../components/Header/SignInDropDown/SignInDropDown";
import UserProfile from "../components/UserProfile/UserProfile";

// export async function getServerSideProps () {
//   return {
//     props: {}
//   }
// }

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [healerLogin, setHealerLogin] = useState(false);
  const [signInDropDownOpen, setSignInDropDownOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/lob_icon.png" />
        <title>life of brain</title>
      </Head>
      
      <div className="sticky top-0 bg-white z-50">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} signInDropDownOpen={signInDropDownOpen} setSignInDropDownOpen={setSignInDropDownOpen} healerLogin={healerLogin}/>
      </div>
      <div className="">
        {signInDropDownOpen && <SignInDropDown signInDropDownOpen={signInDropDownOpen} setSignInDropDownOpen={setSignInDropDownOpen} healerLogin={healerLogin} setHealerLogin={setHealerLogin} />}
        {menuOpen && <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} session={session} signIn={signIn} signOut={signOut}/>}
      </div>


      <main className="mx-auto">
        <UserProfile/>
      </main>

    </div>
  );
}
