import React from 'react';
import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header/Header";
import { signIn, signOut, useSession } from "next-auth/react";
import Menu from '../components/Homepage/Menu';
import UserProfile from '../components/UserProfile/UserProfile';

const Profile = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { data: session, status } = useSession();
  return (
    <div className='bg-gray-100 h-screen'>
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
        <UserProfile/>
      </main>
    </div>
  )
}

export default Profile