import Image from "next/image";
import {ChartSquareBarIcon, PlayIcon, UserCircleIcon, UserGroupIcon } from "@heroicons/react/outline";
import { useRouter } from 'next/router';
import { useState } from 'react';
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "../../../firebase";
import { useSession } from "next-auth/react";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { async } from "@firebase/util";

const Header = ({menuOpen, setMenuOpen, signIn, signOut}) => {

    const router = useRouter();
    const [loading, setLoading] = useState();
    const {data: session} = useSession();

    const uploadPost = async () => {
        if(loading) return;

        setLoading(true);

        const docRef = await addDoc(collection(db, 'users'), {
            username: session.user.name,
            email: session.user.email,
            profileImg: session.user.image,
            timeStamp: serverTimestamp()
        })
        
        // const imageRef = ref(storage, `users/${docRef.id}/image`);

        // await uploadString(imageRef, '/fb_icon.png', "data_url").then(async snapshot => {
        //     const downloadUrl = await getDownloadURL(imageRef);
        //     await updateDoc(doc(db, 'users', docRef.id), {
        //         image: downloadUrl
        //     })
        // });

        setLoading(false);
    }

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
                    loading="eager"
                    objectFit="contain"
                    className="cursor-pointer"
                />
            </div>
            
            {/* tabs desktop*/}
            <div className="flex items-center">
                
                {/* Assess */}
                <div onClick={()=> router.push('/assess')} className="hidden md:flex text-lob_text text-xl font-semibold px-6 cursor-pointer">
                    <div className="flex flex-col items-center transform hover:scale-110">
                        <ChartSquareBarIcon className="h-8 w-8 text-lob_text"/>
                        <p className="text-xs">Assess</p>
                        <div className="absolute top-0 right-0">
                            <span class="animate-ping absolute inline-flex h-4 w-4 -top-0.5 rounded-full bg-blue-500 opacity-50"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 -top-2.5 opacity-75 bg-blue-600"></span>
                        </div>
                    </div>
                </div>
                {/* Doctors */}
                <div onClick={()=> router.push('/doctors')} className="hidden md:flex text-lob_text text-xl font-semibold px-6 cursor-pointer">
                    {/* <p>Doctors</p> */}
                    <div className="flex flex-col items-center transform hover:scale-110">
                        {/* <PlusSmIcon className="h-8 w-8 font-extrabold text-red-600"/> */}
                        <Image
                            src="/doctorv.webp"
                            width={30}
                            height={32}
                            loading="eager"
                            objectFit="contain"
                            className="cursor-pointer mb-1"
                        />
                        <p className="text-xs">Doctors</p>
                    </div>
                </div>
                {/* Community */}
                <div onClick={()=> router.push('https://join.slack.com/t/lifeofbrain/shared_invite/zt-149t385io-2sd7l~kU5RouUl2OFrT5Dw')} className="hidden md:flex text-lob_text text-xl font-semibold px-6 cursor-pointer">
                    {/* <p>Community</p> */}
                    <div className="flex flex-col items-center transform hover:scale-110">
                        <UserGroupIcon className="h-8 w-8 text-lob_text"/>
                        <p className="text-xs">Community</p>
                    </div>
                </div>
                {/* Youtube */}
                <div onClick={()=> router.push('https://www.youtube.com/channel/UCBxMp9UHmIW0fa4igpSUuXw')} className="hidden md:flex text-lob_text text-xl font-semibold px-6 cursor-pointer">
                    {/* <p>Community</p> */}
                    <div className="flex flex-col items-center transform hover:scale-110">
                        <PlayIcon className="h-8 w-8 text-lob_text"/>
                        <p className="text-xs">Revive</p>
                    </div>
                </div>
                {/* SignIn */}
                <div onClick={!session ? signIn : ()=>setMenuOpen(!menuOpen)} className={!session ? "flex bg-blue-500 text-md md:text-lg text-white px-3 w-auto mx-1 md:mx-4 py-1 justify-center items-center font-semibold rounded-lg hover:bg-blue-600 cursor-pointer"  :   "flex text-lg w-auto mx-1 md:mx-4 justify-center items-center font-semibold rounded-full text-lob_text cursor-pointer"}>
                    {session &&
                    <div className="flex rounded-full items-center text-lob_text" onClick={uploadPost}>
                        {!session?.user?.image ? <UserCircleIcon className="w-8 h-8 font-extralight"/> : 
                        <img
                            src={session.user.image}
                            width={40}
                            height={40}
                            className='rounded-full'
                        /> }
                        {/* {session && loading && <div className="text-lg bg-red-500 text-white rounded-lg p-3">Uploading...</div>} */}
                    </div>
                    }
                    <p>
                        {session ? ``: `Sign In`}
                    </p>
                </div>
            </div>
        </div> 
        
    </header>
  )
}

export default Header