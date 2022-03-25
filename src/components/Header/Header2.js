import Image from "next/image";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";

const Header2 = ({newHealer, setMenuOpen, signIn, signInDropDownOpen, setSignInDropDownOpen, healerLogin}) => {

    const router = useRouter();
    const [loading, setLoading] = useState();
    const {data: session, status} = useSession();
    
  return (
    <header>
        <div className="flex items-center justify-between shadow-md px-4 md:px-8 py-2 z-50">
            {/* logo */}
            <div className="flex items-center flex-grow mr-4">
                <Image
                    onClick={()=> router.push('/')}
                    src="/lob_blogo.png"
                    width={220}
                    height={50}
                    loading="eager"
                    objectFit="contain"
                    className="cursor-pointer"
                />
            </div>
            
            {/* healer login*/}
            <div className="flex items-center">
                
                {newHealer === 1 &&
                    <div>
                    </div>
                }
                {newHealer === 0 &&
                    <div className="flex flex-col items-center text-lob_text font-semibold px-6 cursor-pointer">
                        <div onClick={()=> router.push('/healerprofile')} className='flex items-center text-lg px-2 py-1 w-20 justify-center rounded-lg ml-16 cursor-pointer  text-white bg-peachdark hover:bg-lob_text'>
                            Sign In
                        </div>
                    </div>
                }
                {newHealer === 2 &&
                    <div>
                    </div>
                }
            </div>
        </div> 
        
    </header>
  )
}

export default Header2