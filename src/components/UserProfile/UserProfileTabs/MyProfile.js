import { PencilIcon, PlusIcon, UserCircleIcon, XCircleIcon, XIcon } from '@heroicons/react/outline'
import { addDoc, collection, doc, getDoc, onSnapshot, orderBy, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import { useSession } from 'next-auth/react'
import React, {useState, useEffect} from 'react'
import { db } from '../../../../firebase';

const MyProfile = () => {

    const {data: session} = useSession();

    const [age, setAge] = useState(null);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [gender, setGender] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [mentalStatus, setMentalStatus] = useState('');

    const [userData, setUserData] = useState([]);
    const [formComplete, setFormComplete] = useState(false);
    const [flag, setFlag] = useState(false);

    const handleUpdate = async () => {
        if(session) {
            const docRef = await setDoc(doc(db, 'usersprofile', `${session.user.email}`), {
                username: session?.user?.name,
                email: session?.user?.email,
                profileImg: session.user.image,
                timeStamp: serverTimestamp(),
                age: age,
                gender: gender,
                maritalStatus: maritalStatus,
                mentalStatus: mentalStatus
            })
        }
        setOpenUpdate(false);
        setFlag(!flag);
    }

    useEffect(async () => {
        if(session)
        {
        const docSnap = await getDoc(doc(db, 'usersprofile', `${session.user.email}`));
        setUserData(docSnap.data());
        }
    }, [session, userData, flag]);
    

  return (
    <div>
        <div className='flex flex-col relative items-center justify-center bg-white shadow-none md:shadow-xl rounded-2xl p-0 md:p-4 m-0 md:m-2'>
                <div>
                    <div className='my-3'>
                        {!session?.user?.image ? <UserCircleIcon className="w-8 h-8 font-extralight"/> : 
                            <img
                                src={session.user.image}
                                width={120}
                                height={120}
                                className='rounded-full'
                            /> 
                        }
                    </div>

                    <div className='flex items-center justify-center bg-yellow-100 rounded-md transform p-2 hover:scale-105 cursor-pointer' onClick={()=>setOpenUpdate(true)}>
                        <PencilIcon className='w-3 h-3 mr-2 text-wood'/>
                        <p className='text-xs text-wood'>Update Profile</p>
                    </div>
                </div>
                <div className='p-1 mt-4'>
                    <div className='text-xl font-semibold text-wood'>
                        {session.user.name}
                    </div>
                </div>
                <div className='p-1'>
                    <div className='text-md text-yellow-600'>
                        {session.user.email}
                    </div>
                </div>
                <div className='flex items-center p-1 mt-2'>
                    <div className='text-md font-semibold text-yellow-500'>
                        Age:
                    </div>
                    <div className='text-md font-semibold ml-2 text-yellow-400'>
                        {userData?.age}
                    </div>
                </div>
                <div className='flex items-center p-1'>
                    <div className='text-md font-semibold text-yellow-500'>
                        Gender:
                    </div>
                    <div className='text-md font-semibold text-yellow-400 ml-2'>
                        {userData?.gender}
                    </div>
                </div>
                <div className='flex p-1'>
                    <div className='text-md font-semibold text-yellow-500'>
                        Marital Status:
                    </div>
                    <div className='text-md font-semibold text-yellow-400 ml-2'>
                        {userData?.maritalStatus}
                    </div>
                </div>
                <div className='flex p-1'>
                    <div className='text-md font-semibold text-yellow-500'>
                        Mental Health Status:
                    </div>
                    <div className='text-md font-semibold text-yellow-400 ml-2'>
                        {userData?.mentalStatus}
                    </div>
                </div>
                
                {openUpdate && 
                    <div className='absolute w-auto md:w-80 z-50 p-4 flex flex-col justify-center bg-white shadow-xl rounded-2xl'>
                        
                        <div className='absolute top-2 right-2 cursor-pointer'>
                            <XCircleIcon className='w-6 h-6 text-yellow-600' onClick={()=>setOpenUpdate(false)}/>
                        </div>
                        {/* age */}
                        <div className='flex flex-col justify-center items-center mt-2'>
                            <div className='font-semibold mb-2 text-lob_text'>
                                Age:
                            </div>
                            <input className='w-full p-2 border border-yellow-700 rounded-xl' placeholder="Age" type="number" value={age} onChange={e => setAge(e.target.value)}/>
                        </div>

                        {/* gender */}
                        <div className='flex items-center mt-3 flex-col justify-center '>
                            <div className='font-semibold mb-2 text-lob_text'>
                                Gender:
                            </div>
                            <select id='gender' className='w-full p-2 border border-yellow-700 rounded-xl overflow-auto' placeholder="Gender" value={gender} onChange={e => setGender(e.target.value)}>
                                <option>Select</option>
                                <option>She/her</option>
                                <option>He/him</option>
                                <option>They/them</option>
                                <option>Other</option>
                                <option>I prefer not to say</option>
                            </select>
                        </div>

                        {/* marital status */}
                        <div className='flex items-center mt-3 flex-col justify-center '>
                            <div className='font-semibold mb-2 text-lob_text'>
                                Marital Status:
                            </div>
                            <select id='marital_status' className='w-full p-2 border border-yellow-700 rounded-xl overflow-auto' placeholder="Marital status" value={maritalStatus} onChange={e => setMaritalStatus(e.target.value)}>
                                <option>Select</option>
                                <option>Single</option>
                                <option>Engaged</option>
                                <option>Married</option>
                                <option>Widowed</option>
                                <option>Divorced</option>
                                <option>I prefer not to say</option>
                            </select>
                        </div>

                        {/* mental health status */}
                        <div className='flex items-center mt-3 flex-col justify-center '>
                            <div className='font-semibold mb-2 text-lob_text'>
                                Mental Health Status:
                            </div>
                            <select id='mental_status' className='w-full p-2 border border-yellow-700 rounded-xl overflow-auto' placeholder="Mental Health status" value={mentalStatus} onChange={e => setMentalStatus(e.target.value)}>
                                <option>Select</option>
                                <option>Happy</option>
                                <option>Stressed</option>
                                <option>Depressed</option>
                                <option>Need Help</option>
                            </select>
                        </div>

                        {(age === null || gender === '' || maritalStatus === '' || mentalStatus === '') ?
                            <div className='flex flex-col items-center'>
                                <div className='px-6 py-1 bg-gray-400 text-white mx-4 rounded-xl flex items-center justify-center mt-5 cursor-pointer' onClick={()=>setFormComplete(true)}>
                                    Update
                                </div>
                                <p className='text-red-400 text-sm mt-1'>{formComplete && 'Please fill all details'}</p>
                            </div>

                        : 
                            <div className='flex flex-col items-center'>
                                <div className='px-6 py-1 bg-blue-600 text-white mx-4 rounded-xl flex items-center justify-center mt-5 cursor-pointer transform hover:scale-105' onClick={handleUpdate}>
                                    Update
                                </div>
                            </div>
                        }
                    </div>
                }
        </div> 
    </div>
  )
}

export default MyProfile