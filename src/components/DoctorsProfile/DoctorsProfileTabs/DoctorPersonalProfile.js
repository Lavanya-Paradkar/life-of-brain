import { PencilIcon, PlusIcon, UserCircleIcon, XCircleIcon, XIcon } from '@heroicons/react/outline'
import { addDoc, collection, doc, getDoc, onSnapshot, orderBy, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import { useSession } from 'next-auth/react'
import React, {useState, useEffect} from 'react'
import { db } from '../../../../firebase';

const DoctorPersonalProfile = ({
    age, gender, address, approved, category, 
    doctoremail, doctorname, experience,
    image, profession, sessionfee, currency
}) => {

    const [openUpdate, setOpenUpdate] = useState(false);

    const [Age, setAge] = useState(null);
    const [Name, setName] = useState('');
    const [Experience, setExperience] = useState(null);
    const [Fee, setFee] = useState(null);
    const [Profession, setProfession] = useState('');
    const [Category, setCategory] = useState('');
    const [Address, setAddress] = useState('');
    const [Currency, setCurrency] = useState('');

    const [loading, setLoading] = useState(false);


    const [formComplete, setFormComplete] = useState(false);
    const [flag, setFlag] = useState(false);

    const handleUpdate = async () => {

        setLoading(true);

            const docRef = await updateDoc(doc(db, 'doctors', `${doctoremail}`), {
                doctorname: Name,
                age: Age,
                experience: Experience,
                profession: Profession,
                sessionfee: Fee,
                currency: Currency,
                category: Category,
                address: Address
            })
        setOpenUpdate(false);
        setLoading(false);
        setFlag(!flag);
    }
    

  return (
    <div>
        <div className='flex flex-col relative items-center justify-center bg-white shadow-none md:shadow-xl rounded-2xl p-0 md:p-4 m-0 md:m-2'>
                <div>
                    <div className='my-3'>
                        <img
                            src={image}
                            width={120}
                            height={120}
                            className='rounded-full'
                        /> 
                    </div>

                    <div className='flex items-center justify-center bg-yellow-100 rounded-md transform p-2 hover:scale-105 cursor-pointer' onClick={()=>setOpenUpdate(true)}>
                        <PencilIcon className='w-3 h-3 mr-2 text-wood'/>
                        <p className='text-xs text-wood'>Update Profile</p>
                    </div>
                </div>
                <div className='p-1 mt-4'>
                    <div className='text-xl font-semibold text-wood'>
                        {doctorname}
                    </div>
                </div>
                <div className='p-1'>
                    <div className='text-md text-yellow-600'>
                        {doctoremail}
                    </div>
                </div>
                <div className='flex items-center p-1 mt-2'>
                    <div className='text-md font-semibold text-yellow-500'>
                        Age:
                    </div>
                    <div className='text-md font-semibold ml-2 text-green-400'>
                        {age}
                    </div>
                </div>
                <div className='flex items-center p-1'>
                    <div className='text-md font-semibold text-yellow-500'>
                        Gender:
                    </div>
                    <div className='text-md font-semibold text-green-400 ml-2'>
                        {gender}
                    </div>
                </div>
                <div className='flex p-1'>
                    <div className='text-md font-semibold text-yellow-500'>
                        Country:
                    </div>
                    <div className='text-md font-semibold text-green-400 ml-2'>
                        {address}
                    </div>
                </div>
                <div className='flex p-1'>
                    <div className='text-md font-semibold text-yellow-500'>
                        Fee (per session):
                    </div>
                    <div className='text-md font-semibold text-green-400 ml-2'>
                        {currency}
                    </div>
                    <div className='text-md font-semibold text-green-400 ml-1'>
                        {sessionfee}
                    </div>
                </div>
                <div className='flex p-1'>
                    <div className='text-md font-semibold text-yellow-500'>
                        Profession:
                    </div>
                    <div className='text-md font-semibold text-green-400 ml-2'>
                        {profession}
                    </div>
                </div>
                <div className='flex p-1'>
                    <div className='text-md font-semibold text-yellow-500'>
                        Experience:
                    </div>
                    <div className='text-md font-semibold text-green-400 ml-2'>
                        {experience}
                    </div>
                </div>
                <div className='flex p-1'>
                    <div className='text-md font-semibold text-yellow-500'>
                        Verification Status:
                    </div>
                    <div className='text-md font-semibold text-green-400 ml-2'>
                        {approved ? 'Verified' : 'Not Verified'}
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
                                Name:
                            </div>
                            <input className='w-full p-2 border border-yellow-700 rounded-xl' placeholder="Name" type="text" value={Name} onChange={e => setName(e.target.value)}/>
                        </div>

                        <div className='flex flex-col justify-center items-center mt-2'>
                            <div className='font-semibold mb-2 text-lob_text'>
                                Age:
                            </div>
                            <input className='w-full p-2 border border-yellow-700 rounded-xl' placeholder="Age" type="number" value={Age} onChange={e => setAge(e.target.value)}/>
                        </div>

                        {/* sessionfee */}
                        <div className='flex flex-col justify-center items-center mt-2'>
                            <div className='font-semibold mb-2 text-lob_text'>
                                Fee (per session):
                            </div>
                            <div className='relative flex items-center border rounded-xl w-full p-2 border-yellow-700'>
                                <select id='experience' className='absolute flex items-center focus:outline-none left-0 ml-1 w-24 border-r border-yellow-700 rounded=r-xl overflow-auto' placeholder="Currency" value={Currency} required onChange={e => setCurrency(e.target.value)}>
                                    <option className='text-gray-300'>Currency</option>
                                    <option>$ (USD)</option>
                                    <option>A$ (AUD)</option>
                                    <option>C$ (CAD)</option>
                                    <option>€ (EUR)</option>
                                    <option>₹ (INR)</option>
                                    <option>¥ (JPY)</option>
                                    <option>£ (GBP)</option>
                                    <option>S$ (SGD)</option>
                                    <option>₩ (KRW)</option>

                                </select>
                                <input className='border-none focus:outline-none ml-28' type='number' min={100} max={1000000000} placeholder='Fee per session' required value={Fee} onChange={e => setFee(e.target.value)}/>

                            </div>                       
                        </div>

                        {/* address */}
                        <div className='flex flex-col justify-center items-center mt-2'>
                            <div className='font-semibold mb-2 text-lob_text'>
                                Country:
                            </div>
                            <select id='country' className='w-full p-2 border focus:outline-none border-yellow-700 rounded-xl overflow-auto' placeholder="Select your Country" value={Address} required onChange={e => setAddress(e.target.value)}>
                                <option className='text-gray-300'>Select</option>
                                <option>Australia</option>
                                <option>Canada</option>
                                <option>France</option>
                                <option>Germany</option>
                                <option>India</option>
                                <option>Japan</option>
                                <option>Singapore</option>
                                <option>South Korea</option>
                                <option>United Kingdom</option>
                                <option>United States</option>
                                
                            </select>
                        </div>

                        {/* experience */}
                        <div className='flex flex-col justify-center items-center mt-2'>
                            <div className='font-semibold mb-2 text-lob_text'>
                                Experience:
                            </div>
                            <select id='experience' className='w-full p-2 border border-yellow-700 rounded-xl' placeholder="Years of experience" value={Experience} required onChange={e => setExperience(e.target.value)}>
                                <option className='text-gray-300'>Select</option>
                                <option>1+ years</option>
                                <option>2-5 years</option>
                                <option>5+ years</option>
                                <option>10+ years</option>
                            </select>
                        </div>

                        {/* profession */}
                        <div className='flex flex-col justify-center items-center mt-2'>
                            <div className='font-semibold mb-2 text-lob_text'>
                                Profession:
                            </div>
                            <select id='profession' className='w-full p-2 border border-yellow-700 rounded-xl' placeholder="Profession" required value={Profession} onChange={e => setProfession(e.target.value)}>
                                <option className='text-gray-300'>Select</option>
                                <option>Counselors</option>
                                <option>Psychologists</option>
                            </select>
                        </div>

                        {/* category */}
                        <div className='flex flex-col justify-center items-center mt-2'>
                            <div className='font-semibold mb-2 text-lob_text'>
                                Category:
                            </div>
                            <select id='category' className='w-full p-2 border border-yellow-700 rounded-xl' placeholder="Profession" required value={Category} onChange={e => setCategory(e.target.value)}>
                                {Profession === 'Counselors' &&
                                    <optgroup>
                                        <option className='text-gray-300'>Select</option>
                                        <option>Mental Health Counselors</option>
                                        <option>Marriage and Family Counselors</option>
                                        <option>Substance Abuse Counselors</option>
                                        <option>Rehabilitation Counselors</option>
                                        <option>Child Abuse Counselors</option>
                                        <option>Career Counselors</option>
                                    </optgroup>
                                }
                                {Profession === 'Psychologists' &&
                                    <optgroup>
                                        <option className='text-gray-300'>Select</option>
                                        <option>Clinical Neuropsychologists</option>
                                        <option>Clinical Psychologists</option>
                                    </optgroup>
                                }
                                {Profession === '' && 
                                    <optgroup>
                                        <option>Please Select Profession</option>
                                    </optgroup>
                                }
                            </select>
                        </div>

                        
                        {(Age === null || Fee === null || Profession === '' || Category === '' || Experience === null || Address === '' || Name === '') ?
                            <div className='flex flex-col items-center'>
                                <div className='px-6 py-1 bg-gray-400 text-white mx-4 rounded-xl flex items-center justify-center mt-5 cursor-pointer' onClick={()=>setFormComplete(true)}>
                                    Update
                                </div>
                                <p className='text-red-400 text-sm mt-1'>{formComplete && 'Please fill all details'}</p>
                            </div>

                        : 
                            <div className='flex flex-col items-center'>
                                <div className='px-6 py-1 bg-blue-600 text-white mx-4 rounded-xl flex items-center justify-center mt-5 cursor-pointer transform hover:scale-105' onClick={handleUpdate}>
                                    {loading ? 'Updating...' : 'Update'}
                                </div>
                            </div>
                        }
                    </div>
                }

        </div> 
    </div>
  )
}

export default DoctorPersonalProfile