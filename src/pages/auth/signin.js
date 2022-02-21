import { getProviders, signIn } from "next-auth/react";
import Image from "next/dist/client/image";

export default function SignIn({ providers }) {
  return (
    <div className="flex flex-col items-center mt-40 md:mt-20">
        <div>
            <Image
                   
                src="/logoposter.png"
                width={180}
                height={180}
                objectFit="contain"
                className=""
            />
        </div>
        <div className="flex flex-col items-center mt-4">
            {Object.values(providers).map((provider) => (
                <div key={provider.name} className='m-2'>
                <button className="flex items-center justify-start border px-2 py-1 hover:shadow-lg rounded-lg border-lob_text w-72 text-xl" onClick={() => signIn(provider.id, { callbackUrl: "/"})}>
                    <div className="mt-2">
                        {provider.id === 'google' && <Image src='/google_icon.png' width={30} height={30} objectFit="contain"/>}
                    </div>
                    <div className="mt-2">
                        {provider.id === 'facebook' && <Image src='/fb_icon.png' width={30} height={30} objectFit="contain"/>}
                    </div>
                    <div className="mr-4 mt-2">
                        {provider.id === 'instagram' && <Image src='/insta_icon.png' width={30} height={30} objectFit="contain"/>}
                    </div>
                    <div>
                        Sign in with {provider.name}
                    </div>
                </button>
                </div>
            ))}
        </div>
    </div>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

/*
// If older than Next.js 9.3
SignIn.getInitialProps = async () => {
  return {
    providers: await getProviders()
  }
}
*/      