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

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/lob_icon.png" />
        <title>life of brain</title>
      </Head>
      
      <div className="sticky top-0 bg-white z-50">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} signIn={signIn} signOut={signOut} />
      </div>
      <div className="">
        {menuOpen && <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} session={session} signIn={signIn} signOut={signOut}/>}
      </div>


      <main className="mx-auto">
        <Homepage/>
        <Facts/>
        <Process/>
        <Ytb/>
        <Footer/>
        <MobileOptions/>
      </main>

    </div>
  );
}
