import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header/Header";
import { signIn, signOut, useSession } from "next-auth/react";
import MobileOptions from "../components/Header/MobileOptions";
import Menu from "../components/Homepage/Menu";
import SignInDropDown from "../components/Header/SignInDropDown/SignInDropDown";
import DoctorsLoginPage from "../components/Doctors/DoctorsLogin/DoctorsLoginPage";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import DoctorsLoginSuccess from "../components/Doctors/DoctorsLogin/DoctorsLoginSuccess";
import Header2 from "../components/Header/Header2";

export default function Healerlogin() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [healerLogin, setHealerLogin] = useState(false);
  const [signInDropDownOpen, setSignInDropDownOpen] = useState(false);
  const { data: session, status } = useSession();
  const [success, setSuccess] = useState(false);
  const [oldUser, setOldUser] = useState(false);

  const newHealer = 0;

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/lob_icon.png" />
        <title>life of brain</title>
      </Head>
      
      <div className="sticky top-0 bg-white z-50">
        <Header2 newHealer={newHealer} setMenuOpen={setMenuOpen} signInDropDownOpen={signInDropDownOpen} setSignInDropDownOpen={setSignInDropDownOpen} healerLogin={healerLogin}/>
      </div>
      <div className="">
        {signInDropDownOpen && <SignInDropDown signInDropDownOpen={signInDropDownOpen} setSignInDropDownOpen={setSignInDropDownOpen} healerLogin={healerLogin} setHealerLogin={setHealerLogin} />}
        {menuOpen && <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} session={session} signIn={signIn} signOut={signOut}/>}
      </div>


      <main className="mx-auto">
        {!success && !oldUser &&
          <DoctorsLoginPage success={success} setSuccess={setSuccess}/>
        }
        {success && 
          <DoctorsLoginSuccess/>
        }
        <MobileOptions/>
      </main>

    </div>
  );
}