import React from 'react'
import Pay from './Pay'
import Inputfield from './Inputfield';
import { useState } from 'react';
function Donate() {
const[fname,setFname]=useState();
const[lname,setLname]=useState();
const[email,setEmail]=useState();
const[amount,setAmount]=useState();
const rn = Math.floor(Math.random()
* (9856237 - 1 + 1)) + 34534;
const tx_ref=rn.toString();
const public_key='CHAPUBK_TEST-pq7xpwyUzlAzob7nwfab9JYvtehAUde6';// we shall use .env file for live mode
  return (
  
    <div className='bg-purple-500 rounded-2xl w-8/12 h-3/6 flex justify-center ' >
     <div className='flex flex-col p-10' >
     <Inputfield type="text" placeholder="First Name" id='f' onchange={(e)=>setFname(e.target.value)}/>
     <Inputfield type="text" placeholder="Last Name" id='l' onchange={(e)=>setLname(e.target.value)}/>
     <Inputfield type="email" placeholder="Email" id='e' onchange={(e)=>setEmail(e.target.value)}/>
     <Inputfield type="number" placeholder="Amount" id='a' onchange={(e)=>setAmount(e.target.value)}/>
        {/* <label htmlFor="f">FirstName:</label>
        <input
        onChange={(e)=>setFname(e.target.value)}
         type="text" name="" id="f" placeholder='First Name' className='w-80 h-10 font-bold font-sans text-purple-500 border-red-200  rounded-md p-3'/> */}
        {/* <label htmlFor="l">LastName:</label>
        <input
         onChange={(e)=>setLname(e.target.value)} 
        type="text" name="" id="l" placeholder='Last Name' className='w-80 h-10 font-bold font-sans text-purple-500 border-red-200  rounded-md p-3 '/>
        <label htmlFor="e">Email:</label> */}
        {/* <input 
         onChange={(e)=>setEmail(e.target.value)}
        type="email" name="" id="e" placeholder='Email' className='w-80 h-10 font-bold font-sans text-purple-500 border-red-200  rounded-md p-3'/>
        <label htmlFor="a">Amount:</label>
        <input
         onChange={(e)=>setAmount(e.target.value)}
        type="number" name="" id="a" placeholder='Amount' className='w-80 h-10 font-bold font-sans text-purple-500 border-red-200  rounded-md p-3'/> */}
        <Pay fname={fname} lname={lname} email={email} amount={amount} tx_ref={tx_ref} publickey={public_key}/>
     </div>
    </div>
   
  )
}

export default Donate
