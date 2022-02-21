import Image from "next/image";
import {AtSymbolIcon, EmojiHappyIcon, MenuIcon, UserCircleIcon, UserIcon} from "@heroicons/react/outline";
import { useState } from "react";
import { useRouter } from 'next/router';


const Header = ({menuOpen, setMenuOpen, session, signIn, signOut}) => {

    const router = useRouter();

  return (
    <header>
        <div className="flex items-center shadow-md px-4 md:px-8 py-2 z-50">
            {/* logo */}
            <div className="flex items-center flex-grow mr-4">
                <Image
                    onClick={()=> router.push('/')}
                    src="/lob_blogo.png"
                    width={220}
                    height={50}
                    objectFit="contain"
                    className="cursor-pointer"
                />
            </div>
            
            {/* tabs desktop*/}
            <div className="flex items-center">
                {/* Cure */}
                <div onClick={()=> router.push('/about')} className="hidden md:flex text-lob_text text-xl font-semibold px-4 hover:text-lob_text-peach cursor-pointer">
                    <p>About</p>
                </div>
                {/* Know Yourself */}
                <div onClick={()=> router.push('/assess')} className="hidden md:flex text-lob_text text-xl font-semibold px-4 hover:text-lob_text-peach cursor-pointer">
                    <p>Assess</p>
                </div>
                {/* Community */}
                <div onClick={()=> router.push('https://join.slack.com/t/lifeofbrain/shared_invite/zt-149t385io-2sd7l~kU5RouUl2OFrT5Dw')} className="hidden md:flex text-lob_text text-xl font-semibold px-4 hover:text-lob_text-peach cursor-pointer">
                    <p>Community</p>
                </div>
                {/* Doctors */}
                <div onClick={()=> router.push('/doctors')} className="hidden md:flex text-lob_text text-xl font-semibold px-4 hover:text-lob_text-peach cursor-pointer">
                    <p>Doctors</p>
                </div>
                {/* SignIn */}
                <div onClick={!session ? signIn : signOut} className={!session ? "hidden md:flex bg-lob_text text-xl text-white px-4 w-auto mx-4 py-1 justify-center items-center font-semibold rounded-full hover:bg-green-600 cursor-pointer"  :   "hidden md:flex text-lg pl-2 pr-4 w-auto mx-4 py-1 justify-center items-center font-semibold rounded-full border border-lob_text text-lob_text hover:shadow-2xl cursor-pointer"}>
                    {session &&
                    <div className="mr-1 flex rounded-full items-center text-lob_text">
                        <UserCircleIcon className="w-8 h-8 p-1 font-extralight"/>
                    </div>
                    }
                    <p>
                        {session ? `${session.user.name}`: `Sign In`}
                    </p>
                </div>
                <div className="flex md:hidden items-center text-white px-1 rounded-xl cursor-pointer" onClick={()=>setMenuOpen(!menuOpen)}>
                    {session &&
                        <div className="flex rounded-full items-center text-lob_text">
                            <UserCircleIcon className="w-10 h-10 p-1 font-extralight"/>
                        </div>
                    }
                    <MenuIcon className="h-12 p-2 text-lob_text"/>
                </div>
            </div>
        </div> 
        
    </header>
  )
}

export default Header