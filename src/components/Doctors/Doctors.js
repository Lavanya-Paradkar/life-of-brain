import React from 'react'
import DoctorCard from './DoctorsCard/DoctorsCard'
import { doctorsData } from './data/doctorsData'
import DoctorsLoginCard from './DoctorsLogin/DoctorsLoginCard'
import Filters from './Filters/Filters'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectItems } from '../../slices/basketSlice'
import { useState, useEffect } from 'react'
import { collection, onSnapshot, where, orderBy, query } from 'firebase/firestore'
import { db } from '../../../firebase'
import NoDoctor from '../Doctor/NoDoctor'
import { AdjustmentsIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'

const Doct = () => {

  const [psychologist, setPsychologist] = useState(false);
  
  const [allCounselor, setAllCounselor] = useState(true);
  const [mentalHealthCounselor, setMentalHealthCounselor] = useState(false);
  const [marriageCounselor, setMarriageCounselor] = useState(false);
  const [substanceCounselor, setSubstanceCounselor] = useState(false);
  const [childCounselor, setChildCounselor] = useState(false);
  const [rehabCounselor, setRehabCounselor] = useState(false);
  const [careerCounselor, setCareerCounselor] = useState(false);

  const [neuropsychologist, setNeuropsychologist] = useState(false);
  const [clinicalPsychologist, setClinicalPsychologist] = useState(false);

  const [loading, setLoading] = useState(false);
  const [openMobileFilter, setOpenMobileFilter] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState('India');

  const items = useSelector(selectItems);

  const [doctorData, setDoctorData] = useState([]);

  useEffect(async () => {

    setLoading(true);

    if(allCounselor)
    {
      const allCounselors = await onSnapshot(query(collection(db, 'doctors'), where("profession", "==", "Counselors"), where("address", "==", `${selectedCountry}`)), (snapshot) => {
        setDoctorData(snapshot.docs);
      });
      setLoading(false);
      return allCounselors;
    }

      const mentalHealthCounselors = await onSnapshot(query(collection(db, 'doctors'), where("category", "==", `${mentalHealthCounselor ? 'Mental Health Counselors': (
        (marriageCounselor ? 'Marriage and Family Counselors': 
        (substanceCounselor ? 'Substance Abuse Counselors': 
        (childCounselor ? 'Child Abuse Counselors' : 
        (rehabCounselor ? 'Rehabilitation Counselors':
        (careerCounselor ? 'Career Counselors':
        (neuropsychologist ? 'Clinical Neuropsychologists':
        (clinicalPsychologist && 'Clinical Psychologists' )))))))
      )}`), where("address", "==", `${selectedCountry}`)), (snapshot) => {
        setDoctorData(snapshot.docs);
      });

    
    setLoading(false);

  }, [db, allCounselor, mentalHealthCounselor, marriageCounselor, substanceCounselor, childCounselor, rehabCounselor, careerCounselor, neuropsychologist, clinicalPsychologist, selectedCountry]);


  return (
  <div className='flex justify-start mb-20'>

    {/* mobile filters */}
    <div className='flex flex-col md:hi items-center'>
      {/* button  */}
      <div className='flex fixed z-40 right-4 bottom-20 md:hidden'>
        <div onClick={() => setOpenMobileFilter(!openMobileFilter)} className='flex items-center text-wood bg-yellow-100 px-5 py-3 mt-2 shadow-xl rounded-lg'>
          {!openMobileFilter ? 
            <>
              <AdjustmentsIcon className='w-5 h-5 m-1 text-wood'/>
              <p className='text-lg font-medium text-wood'>Filters</p>
            </>
            :
            <>
              <XIcon className='w-5 h-5 m-1 text-red-400'/>
              <p className='text-lg font-medium text-red-400'>Close</p>
            </>
          }
          
        </div>
      

      {openMobileFilter && (
        <div className='z-50 fixed flex items-center -mt-64 -ml-48' onMouseLeave={() => setOpenMobileFilter(false)}>
          <Filters
            psychologist={psychologist}
            setPsychologist={setPsychologist}
            allCounselor={allCounselor}
            setAllCounselor={setAllCounselor}
            mentalHealthCounselor={mentalHealthCounselor}
            setMentalHealthCounselor={setMentalHealthCounselor}
            marriageCounselor={marriageCounselor}
            setMarriageCounselor={setMarriageCounselor}
            substanceCounselor={substanceCounselor}
            setSubstanceCounselor={setSubstanceCounselor}
            childCounselor={childCounselor}
            setChildCounselor={setChildCounselor}
            rehabCounselor={rehabCounselor}
            setRehabCounselor={setRehabCounselor}
            careerCounselor={careerCounselor}
            setCareerCounselor={setCareerCounselor}
            neuropsychologist={neuropsychologist}
            setNeuropsychologist={setNeuropsychologist}
            clinicalPsychologist={clinicalPsychologist}
            setClinicalPsychologist={setClinicalPsychologist}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </div>
      )}
      </div>
    </div>


    {/* cards */}
      {doctorData.length > 0 && !loading ? (
        <div className='p-4 grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 w-full md:w-auto lg:grid-cols-3 xl:grid-cols-4'>
          
          {doctorData.map(doctor => (
            <DoctorCard
              img = {doctor.data().image}
              name = {doctor.data().doctorname}
              price = {doctor.data().sessionfee}
              currency = {doctor.data().currency}
              address = {doctor.data().address}
              approved = {doctor.data().approved}
              profession = {doctor.data().profession}
              category = {doctor.data().category}
              email = {doctor.data().email}
              experience = {doctor.data().experience}
            />
          ))}
        </div>
        ) : (
          <div className='w-auto md:w-2/3 mx-6'>
              <NoDoctor/>
          </div>
          
        )
      }
   
      <div  className='hidden md:flex p-4 flex-col'>
        {/* doctors login */}
        <div>
          <DoctorsLoginCard/>
        </div>
        {/* filters */}
        <div>
          <Filters
            psychologist={psychologist}
            setPsychologist={setPsychologist}
            allCounselor={allCounselor}
            setAllCounselor={setAllCounselor}
            mentalHealthCounselor={mentalHealthCounselor}
            setMentalHealthCounselor={setMentalHealthCounselor}
            marriageCounselor={marriageCounselor}
            setMarriageCounselor={setMarriageCounselor}
            substanceCounselor={substanceCounselor}
            setSubstanceCounselor={setSubstanceCounselor}
            childCounselor={childCounselor}
            setChildCounselor={setChildCounselor}
            rehabCounselor={rehabCounselor}
            setRehabCounselor={setRehabCounselor}
            careerCounselor={careerCounselor}
            setCareerCounselor={setCareerCounselor}
            neuropsychologist={neuropsychologist}
            setNeuropsychologist={setNeuropsychologist}
            clinicalPsychologist={clinicalPsychologist}
            setClinicalPsychologist={setClinicalPsychologist}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />

        </div>
      </div>
  </div>
  )
}

export default Doct