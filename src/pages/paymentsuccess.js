import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header/Header";
import { signIn, signOut, useSession } from "next-auth/react";
import MobileOptions from "../components/Header/MobileOptions";
import Menu from "../components/Homepage/Menu";
import SignInDropDown from "../components/Header/SignInDropDown/SignInDropDown";
import SuccessPayment from "../components/Payments/SuccessPayment";

export default function Paymentsuccess() {

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
        <SuccessPayment/>
        <MobileOptions/>
      </main>

    </div>
  );
}
