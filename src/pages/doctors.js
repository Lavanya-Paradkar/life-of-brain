import React from 'react';
import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header/Header";
import MobileMenu from "../components/Homepage/MobileMenu";
import { signIn, signOut, useSession } from "next-auth/react";
import Doctor from '../components/Doctor/Doctor';

const Doctors = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { data: session, status } = useSession();
  return (
    <div>
        <Head>
        <link rel="shortcut icon" href="/lob_icon.png" />
        <title>life of brain</title>
      </Head>
      
      <div className="sticky top-0 bg-white z-50">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} session={session} signIn={signIn} signOut={signOut} />
      </div>
      <div className="">
        {menuOpen && <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} session={session} signIn={signIn} signOut={signOut}/>}
      </div>


      <main className="mx-auto flex items-center justify-center">
        <Doctor/>
      </main>
    </div>
  )
}

export default Doctors