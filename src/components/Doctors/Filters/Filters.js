import React, { useState } from 'react';

const Filters = ({
  psychologist, setPsychologist,
  allCounselor, setAllCounselor,
  mentalHealthCounselor, setMentalHealthCounselor,
  marriageCounselor, setMarriageCounselor,
  substanceCounselor, setSubstanceCounselor,
  childCounselor, setChildCounselor,
  rehabCounselor, setRehabCounselor,
  careerCounselor, setCareerCounselor,
  neuropsychologist, setNeuropsychologist,
  clinicalPsychologist, setClinicalPsychologist,
  selectedCountry, setSelectedCountry


}) => {

  const handleOptions = (allCounselor, mentalHealthCounselor, marriageCounselor, substanceCounselor, rehabCounselor, childCounselor, careerCounselor) => {
    setAllCounselor(allCounselor);
    setMentalHealthCounselor(mentalHealthCounselor);
    setMarriageCounselor(marriageCounselor);
    setSubstanceCounselor(substanceCounselor);
    setChildCounselor(childCounselor);
    setRehabCounselor(rehabCounselor);
    setCareerCounselor(careerCounselor);
  };

  const handlePsychologistOptions = (neuropsychologist,clinicalPsychologist) => {
    setNeuropsychologist(neuropsychologist);
    setClinicalPsychologist(clinicalPsychologist);
  };
  

  return (
    <div className='flex flex-col p-6 mt-24 mx-1 shadow-lg rounded-lg bg-white fixed'>
      {/* by type */}
        <div className='flex justify-evenly border-b-2 border-blue-600 pb-2 mb-4'>
            <div className={!psychologist ? 'text-blue-600 font-semibold px-1 cursor-pointer': 'text-gray-400 font-semibold px-1 cursor-pointer'} onClick={() => {setPsychologist(false); handleOptions(true, false, false, false, false, false, false); handlePsychologistOptions(false, false);}}>
              Counselors
            </div>
            <div className={psychologist ? 'text-blue-600 font-semibold px-1 cursor-pointer': 'text-gray-400 font-semibold px-1 cursor-pointer'} onClick={() => {setPsychologist(true); handleOptions(false, false, false, false, false, false, false); handlePsychologistOptions(true, false);}}>
              Psychologists
            </div>
        </div>
      {/* by country */}
        <div className='flex flex-col mb-4'>
          <p className='flex mb-2 text-sm text-gray-600'>Filter by Country</p>
            <div className="flex justify-center">
              <select className="form-select appearance-none block
                w-full
                px-3
                py-1.5
                text-blue-500
                text-base
                font-semibold
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-400
                rounded-lg
                transition
                ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                  <option>India</option>
                  <option>Australia</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                  <option>Japan</option>
                  <option>Singapore</option>
                  <option>South Korea</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
              </select>
            </div>
        </div>
      
      {/* by category */}
        <div>
          <p className='flex mb-2 text-sm text-gray-600'>Filter by Category</p>

          {/* counselors options*/}
          {!psychologist &&
          <div>
            <div className='flex items-center cursor-pointer mb-1' onClick={() => handleOptions(true, false, false, false, false, false, false)}>
              <div className='border border-blue-500 p-px rounded-full mr-2 h-4 w-4 flex items-center justify-center'>
                <div className={allCounselor ? 'h-full w-full rounded-full bg-blue-500': 'h-full w-full rounded-full bg-white'}></div>
              </div>
              <p className={allCounselor ? 'text-md font-medium text-blue-500': 'text-md font-medium text-gray-600'}>All</p>
            </div>

            <div className='flex items-center cursor-pointer mb-1' onClick={() => handleOptions(false, true, false, false, false, false, false)}>
              <div className='border border-blue-500 p-px rounded-full mr-2 h-4 w-4 flex items-center justify-center'>
                <div className={mentalHealthCounselor ? 'h-full w-full rounded-full bg-blue-500': 'h-full w-full rounded-full bg-white'}></div>
              </div>
              <p className={mentalHealthCounselor ? 'text-md font-medium text-blue-500': 'text-md font-medium text-gray-600'}>Mental Health Counsellors</p>
            </div>

            <div className='flex items-center cursor-pointer mb-1' onClick={() => handleOptions(false, false, true, false, false, false, false)}>
              <div className='border border-blue-500 p-px rounded-full mr-2 h-4 w-4 flex items-center justify-center'>
                <div className={marriageCounselor ? 'h-full w-full rounded-full bg-blue-500': 'h-full w-full rounded-full bg-white'}></div>
              </div>
              <p className={marriageCounselor ? 'text-md font-medium text-blue-500': 'text-md font-medium text-gray-600'}>Marriage & Family Counsellors</p>
            </div>

            <div className='flex items-center cursor-pointer mb-1' onClick={() => handleOptions(false, false, false, true, false, false, false)}>
              <div className='border border-blue-500 p-px rounded-full mr-2 h-4 w-4 flex items-center justify-center'>
                <div className={substanceCounselor ? 'h-full w-full rounded-full bg-blue-500': 'h-full w-full rounded-full bg-white'}></div>
              </div>
              <p className={substanceCounselor ? 'text-md font-medium text-blue-500': 'text-md font-medium text-gray-600'}>Substance Abuse Counsellors</p>
            </div>

            <div className='flex items-center cursor-pointer mb-1' onClick={() => handleOptions(false, false, false, false, true, false, false)}>
              <div className='border border-blue-500 p-px rounded-full mr-2 h-4 w-4 flex items-center justify-center'>
                <div className={rehabCounselor ? 'h-full w-full rounded-full bg-blue-500': 'h-full w-full rounded-full bg-white'}></div>
              </div>
              <p className={rehabCounselor ? 'text-md font-medium text-blue-500': 'text-md font-medium text-gray-600'}>Rehabilitation Counsellors</p>
            </div>

            <div className='flex items-center cursor-pointer mb-1' onClick={() => handleOptions(false, false, false, false, false, true, false)}>
              <div className='border border-blue-500 p-px rounded-full mr-2 h-4 w-4 flex items-center justify-center'>
                <div className={childCounselor ? 'h-full w-full rounded-full bg-blue-500': 'h-full w-full rounded-full bg-white'}></div>
              </div>
              <p className={childCounselor ? 'text-md font-medium text-blue-500': 'text-md font-medium text-gray-600'}>Child Abuse Counsellors</p>
            </div>
            
            <div className='flex items-center cursor-pointer mb-1' onClick={() => handleOptions(false, false, false, false, false, false, true)}>
              <div className='border border-blue-500 p-px rounded-full mr-2 h-4 w-4 flex items-center justify-center'>
                <div className={careerCounselor ? 'h-full w-full rounded-full bg-blue-500': 'h-full w-full rounded-full bg-white'}></div>
              </div>
              <p className={careerCounselor ? 'text-md font-medium text-blue-500': 'text-md font-medium text-gray-600'}>Career Counsellors</p>
            </div>
          </div>
          }

          {/* psychologist options */}
          {psychologist && 
            <div>
              <div className='flex items-center cursor-pointer mb-1' onClick={() => handlePsychologistOptions(true, false)}>
                <div className='border border-blue-500 p-px rounded-full mr-2 h-4 w-4 flex items-center justify-center'>
                  <div className={neuropsychologist ? 'h-full w-full rounded-full bg-blue-500': 'h-full w-full rounded-full bg-white'}></div>
                </div>
                <p className={neuropsychologist ? 'text-md font-medium text-blue-500': 'text-md font-medium text-gray-600'}>Clinical Neuropsychologists</p>
              </div>

              <div className='flex items-center cursor-pointer mb-1' onClick={() => handlePsychologistOptions(false, true)}>
                <div className='border border-blue-500 p-px rounded-full mr-2 h-4 w-4 flex items-center justify-center'>
                  <div className={clinicalPsychologist ? 'h-full w-full rounded-full bg-blue-500': 'h-full w-full rounded-full bg-white'}></div>
                </div>
                <p className={clinicalPsychologist ? 'text-md font-medium text-blue-500': 'text-md font-medium text-gray-600'}>Clinical Psychologists</p>
              </div>
            </div>
          }
        </div>


    </div>
  )
}

export default Filters