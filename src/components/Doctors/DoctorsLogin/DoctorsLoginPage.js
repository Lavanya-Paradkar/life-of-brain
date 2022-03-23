import { CameraIcon, EyeIcon, EyeOffIcon } from '@heroicons/react/outline'
import { addDoc, collection, doc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { useRouter } from 'next/router';
import React from 'react'
import { useState, useRef } from 'react';
import { db, storage } from '../../../../firebase';

const DoctorsLoginPage = ({ success, setSuccess, oldUser, setOldUser }) => {


    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState(null);
    const [age, setAge] = useState(null);
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [fee, setFee] = useState(null);
    const [profession, setProfession] = useState('');
    const [category, setCategory] = useState('');
    const [address, setAddress] = useState('');
    const [currency, setCurrency] = useState('');


    const filePickerRef = useRef();
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formComplete, setFormComplete] = useState(false);

    const [passwordVisible, setPasswordVisible] = useState(false);

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        };
    };

    const uploadPost = async () => {
        if(loading) return

        setLoading(true);

        const docRef = await setDoc(doc(db, 'doctors', `${email}`), {
            doctorname: name,
            doctoremail: email,
            password: password,
            experience: experience,
            address: address,
            age: age,
            gender: gender,
            sessionfee: fee,
            currency: currency,
            profession: profession,
            category: category,
            doctorImg: email,
            approved: false,
            timeStamp: serverTimestamp(),
        })
        
        const imageRef = ref(storage, `doctors/${email}/image`);

        await uploadString(imageRef, selectedFile, "data_url").then(async snapshot => {
            const downloadUrl = await getDownloadURL(imageRef);
            await updateDoc(doc(db, 'doctors', email), {
                image: downloadUrl
            })
        });

        setLoading(false);
        setSelectedFile(null);
        setSuccess(true);
    };
    

  return (
    <div className='flex flex-col p-2 md:p-1'>
        <div className='flex flex-col md:flex-row items-center justify-around'>

            {/* camera */}
            {selectedFile ? (
                <div className='flex flex-col items-center cursor-pointer'>
                    <img 
                        src={selectedFile} 
                        className='w-40 h-auto p-2'
                        alt=''
                        onClick={() => setSelectedFile(null)}
                    />
                </div>
            ) : (
                <div onClick={() => filePickerRef.current.click()} className='flex flex-col items-center cursor-pointer'>
                    <CameraIcon className='w-40 h-40 p-4 bg-gray-50 rounded-full text-yellow-400 transform hover:scale-105'/>
                    <div className='text-xl font-semibold text-yellow-400 mt-4'>
                        Upload Photo
                    </div>
                    <input 
                        ref={filePickerRef}
                        type='file'
                        hidden
                        onChange={addImageToPost}
                        required
                    />
                </div>
            )}
            
            {/* border */}
            <div className='hidden md:flex h-56 w-0.5 bg-gray-300 '></div>
            {/* details */}
            <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col'>
                    {/* name */}
                    <div className='flex flex-col items-start mt-4'>
                        <label className='text-blue-600 text-lg font-semibold'>Name</label>
                        <input className='border rounded-xl w-72 p-2 focus:outline-none mt-1 border-blue-400' type='text' placeholder='Enter your name' value={name} required onChange={e => setName(e.target.value)}/>
                    </div>
                    {/* email */}
                    <div className='flex flex-col items-start mt-4'>
                        <label className='text-blue-600 text-lg font-semibold'>Email</label>
                        <input className='border rounded-xl w-72 p-2 mt-1 focus:outline-none border-blue-400' type='email' placeholder='Enter your email' value={email} required onChange={e => setEmail(e.target.value)}/>
                    </div>
                    {/* password */}
                    <div className='flex flex-col items-start mt-4'>
                        <label className='text-blue-600 text-lg font-semibold'>New Password</label>
                        <div className='relative flex items-center'>
                            <input className='border rounded-xl w-72 p-2 mt-1 focus:outline-none border-blue-400' type={!passwordVisible ? 'password': 'text'} id='password' placeholder='Set your login password' required value={password} onChange={e => setPassword(e.target.value)}/>
                            <div className='absolute right-0 mr-2 flex items-center' onClick={() => setPasswordVisible(!passwordVisible)}>
                                {!passwordVisible ? 
                                <EyeIcon className='w-6 h-6 text-gray-400'/> :
                                <EyeOffIcon className='w-6 h-6 text-gray-400'/>
                                }
                            </div>
                        </div>
                        
                    </div>
                    {/* age */}
                    <div className='flex flex-col items-start mt-4'>
                        <label className='text-blue-600 text-lg font-semibold'>Age</label>
                        <input className='border rounded-xl w-72 p-2 mt-1 focus:outline-none border-blue-400' type='number' min={10} placeholder='Enter your age' required value={age} onChange={e => setAge(e.target.value)}/>
                    </div>
                    {/* gender */}
                    <div className='flex flex-col items-start mt-4'>
                        <label className='text-blue-600 text-lg font-semibold'>Gender</label>
                        <select id='gender' className='w-72 p-2 border focus:outline-none border-blue-400 mt-1 rounded-xl overflow-auto' placeholder="Gender" value={gender} required onChange={e => setGender(e.target.value)}>
                            <option className='text-gray-300'>Select</option>
                            <option>She/her</option>
                            <option>He/him</option>
                            <option>They/them</option>
                            <option>Other</option>
                            <option>I prefer not to say</option>
                        </select>
                    </div>
                </div>
                

                {/* right */}
                <div className='flex flex-col ml-0 md:ml-5'>
                    {/* country */}
                    <div className='flex flex-col items-start mt-4'>
                        <label className='text-blue-600 text-lg font-semibold'>Country</label>
                        <select id='country' className='w-72 p-2 border focus:outline-none border-blue-400 mt-1 rounded-xl overflow-auto' placeholder="Select your Country" value={address} required onChange={e => setAddress(e.target.value)}>
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
                    {/* years of experience */}
                    <div className='flex flex-col items-start mt-4'>
                        <label className='text-blue-600 text-lg font-semibold'>Years of Experience</label>
                        <select id='experience' className='w-72 p-2 border focus:outline-none border-blue-400 mt-1 rounded-xl overflow-auto' placeholder="Years of experience" value={experience} required onChange={e => setExperience(e.target.value)}>
                            <option className='text-gray-300'>Select</option>
                            <option>1+ years</option>
                            <option>2-5 years</option>
                            <option>5+ years</option>
                            <option>10+ years</option>
                        </select>
                    </div>
                    {/* Fee per session  */}
                    <div className='flex flex-col items-start mt-4'>
                        <label className='text-blue-600 text-lg font-semibold'>Fee ( per session )</label>
                        <div className='relative flex items-center border rounded-xl w-72 p-2 mt-1 border-blue-400'>
                        <select id='experience' className='absolute flex items-center focus:outline-none left-0 ml-1 w-24 border-r border-blue-400 rounded=r-xl overflow-auto' placeholder="Currency" value={currency} required onChange={e => setCurrency(e.target.value)}>
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
                        <input className='border-none focus:outline-none ml-28' type='number' min={100} max={1000000000} placeholder='Fee per session' required value={fee} onChange={e => setFee(e.target.value)}/>

                        </div>
                    </div>
                    {/* profession */}
                    <div className='flex flex-col items-start mt-4'>
                        <label className='text-blue-600 text-lg font-semibold'>Profession</label>
                        <select id='profession' className='w-72 p-2 border focus:outline-none border-blue-400 mt-1 rounded-xl overflow-auto' placeholder="Profession" required value={profession} onChange={e => setProfession(e.target.value)}>
                            <option className='text-gray-300'>Select</option>
                            <option>Counselors</option>
                            <option>Psychologists</option>
                        </select>
                    </div>
                    {/* category */}
                    <div className='flex flex-col items-start mt-4'>
                        <label className='text-blue-600 text-lg font-semibold'>Category</label>
                        <select id='category' className='w-72 p-2 border focus:outline-none border-blue-400 mt-1 rounded-xl overflow-auto' placeholder="Profession" required value={category} onChange={e => setCategory(e.target.value)}>
                            {profession === 'Counselors' &&
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
                            {profession === 'Psychologists' &&
                                <optgroup>
                                    <option className='text-gray-300'>Select</option>
                                    <option>Clinical Neuropsychologists</option>
                                    <option>Clinical Psychologists</option>
                                </optgroup>
                            }
                            {profession === '' && 
                                <optgroup>
                                    <option>Please Select Profession</option>
                                </optgroup>
                            }
                        </select>
                    </div>
                </div>
            </div>
        </div>
        
        {
            (name === '' || experience === null || email === '' || gender === '' || fee === null || profession === '' || category === '' || address === '' || selectedFile === null || currency === '') ? (
                <div onClick={() => setFormComplete(true)} className='flex flex-col items-center justify-center mt-10 mb-20 md:mb-0'>
                    <p className='mb-1 text-red-400'>{formComplete && 'Please upload photo and fill all the details'}</p>
                    <div className='flex items-center'>
                        <p className='bg-green-500 font-semibold text-lg py-2 px-4 text-white shadow-2xl rounded-xl cursor-pointer transform hover:scale-105'>
                            Register
                        </p>
                    </div>
                </div>
            ) : (
                <div onClick={uploadPost} className='flex items-center justify-center mt-10 mb-20 md:mb-0'>
                    <p className='bg-green-500 font-semibold text-lg py-2 px-4 text-white shadow-2xl rounded-xl cursor-pointer transform hover:scale-105'>
                        {loading ? 'Processing...': 'Register'}
                    </p>
                    
                </div>

            )
        }
    </div>
  )
}

export default DoctorsLoginPage