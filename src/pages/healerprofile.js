import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header/Header";
import { signIn, signOut, useSession } from "next-auth/react";
import Menu from "../components/Homepage/Menu";
import SignInDropDown from "../components/Header/SignInDropDown/SignInDropDown";
import OldDoctorLoginPage from "../components/Doctors/DoctorsLogin/OldDoctorLoginPage";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import DoctorsProfile from "../components/DoctorsProfile/DoctorsProfile";
import { db } from "../../firebase";
import Header2 from "../components/Header/Header2";
import NoDoctor from "../components/Doctor/NoDoctor";

export default function Healerprofile() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [healerLogin, setHealerLogin] = useState(false);
  const [signInDropDownOpen, setSignInDropDownOpen] = useState(false);
  const { data: session, status } = useSession();
  const [doctorEmail, setDoctorEmail] = useState('');
  const [password, setPassword] = useState('');
  const [healerData, setHealerData] = useState([]);
  const [signedIn, setSignedIn] = useState();

  const [newHealer, setNewHealer] = useState(1);
  const [loading, setLoading] = useState(false);

  const checkData = async () => {
    setLoading(true);

    const check = await onSnapshot(query(collection(db, 'doctors'), where("doctoremail", "==", `${doctorEmail}`), where("password", "==", `${password}`)), (snapshot) => {
        setHealerData(snapshot.docs);
      });

    setLoading(false);

    return check;
  };

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
        {signInDropDownOpen && <SignInDropDown signInDropDownOpen={signInDropDownOpen} setSignInDropDownOpen={setSignInDropDownOpen} healerLogin={healerLogin} setHealerLogin={setHealerLogin} checkData={checkData}/>}
        {menuOpen && <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} session={session} signIn={signIn} signOut={signOut}/>}
      </div>


      <main className="mx-auto">
          {
            !signedIn &&
                <OldDoctorLoginPage doctorEmail={doctorEmail} setDoctorEmail={setDoctorEmail} password={password} setPassword={setPassword} setSignedIn={setSignedIn} checkData={checkData}/>
          }
          {signedIn && loading && 
              <div className="bg-white w-full h-80 flex items-center justify-center p-4 rounded-lg">
                loading...
              </div>
          }
          {
              signedIn && healerData[0]?.data() &&
              <DoctorsProfile
                age={healerData[0]?.data().age}
                gender={healerData[0]?.data().gender}
                address={healerData[0]?.data().address}
                approved={healerData[0]?.data().approved}
                category={healerData[0]?.data().category}
                doctoremail={healerData[0]?.data().doctoremail}
                doctorname={healerData[0]?.data().doctorname}
                experience={healerData[0]?.data().experience}
                image={healerData[0]?.data().image}
                password={healerData[0]?.data().password}
                profession={healerData[0]?.data().profession}
                sessionfee={healerData[0]?.data().sessionfee}
                currency={healerData[0]?.data().currency}
              />
          }
          {
              signedIn && !loading && !healerData[0]?.data() &&
              <NoDoctor/>
          }
      </main>

    </div>
  );
}
