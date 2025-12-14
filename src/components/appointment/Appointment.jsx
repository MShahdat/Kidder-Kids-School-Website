import React, { useState } from 'react';



const Appointment = () => {

  const [gName, setGName] = useState('')
  const [gEmail, setGEmail] = useState('')
  const [cName, setCName] = useState('');
  const [cAge, setCAge] = useState('');
  const [msg, setMsg] = useState('')

  const formhandle = (e) => {
    e.preventDefault()
    console.log("gName", gName)
    console.log("gEmail", gEmail)
    console.log('cName', cName);
    console.log('cAge', cAge);
    console.log("message", msg)

    setGName('');
    setGEmail('');
    setCName('');
    setCAge('');
    setMsg('');

  }

  return (
    <div className='max-w-7xl px-4 py-16 mx-auto text-white'>
      <div className='bg-orange-600 rounded-xl min:h-[430px]'>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='mt-0 px-4'>
            <h2 className='pt-4 text-4xl font-medium font-lobster tracking-widest'>Make Appointment</h2>
            <form onSubmit={formhandle} className='w-full px-2 mt-4'>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='mt-0 block font-semibold text-[16px] '>Gurdian Name</label>
                  <input onChange={(e) => setGName(e.target.value)} type='text' value={gName} placeholder='Gurdian Name' required className='mt-1 outline-none text-[14px] bg-white text-gray-800 font-medium rounded px-3 py-2.5 w-full'></input>
                </div>
                <div>
                  <label className=' block font-semibold text-[16px]'>Gurdian Email</label>
                  <input onChange={(e) => setGEmail(e.target.value)} type='email' value={gEmail} placeholder='example@gmail.com' required className='mt-1 outline-none text-[14px] bg-white text-gray-800 font-medium rounded px-3 py-2.5 w-full'></input>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='mt-3 block font-semibold text-[16px]'>Child Name</label>
                  <input onChange={(e) => setCName(e.target.value)} type='text' value={cName} placeholder='Child Name' required className='mt-1 outline-none text-[14px] bg-white text-gray-800 font-medium rounded px-3 py-2.5 w-full'></input>
                </div>
                <div>
                  <label className='mt-3 block font-semibold text-[16px]'>Child Age</label>
                  <input onChange={(e) => setCAge(e.target.value)} type='text' value={cAge} placeholder='Child Age' required className='mt-1 outline-none text-[14px] bg-white text-gray-800 font-medium rounded px-3 py-2.5 w-full'></input>
                </div>
              </div>

              <label className='mt-3 block font-semibold text-[16px]'>Message</label>
              <textarea onChange={(e) => setMsg(e.target.value)} type='text' rows={3} value={msg} placeholder='Write message' required className='mt-1 outline-none text-[14px] bg-white text-gray-800 font-medium rounded px-3 py-2.5 w-full'></textarea>

              <button type='submit' className='text-orange-600 text-center bg-white font-bold text-md w-full rounded mt-2 py-2'>Submit</button>

            </form>
          </div>
          <div className="">
            <img src='https://images.unsplash.com/photo-1473662711507-13345f9d447c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full h-[430px] object-cover rounded-r-xl' ></img>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Appointment;