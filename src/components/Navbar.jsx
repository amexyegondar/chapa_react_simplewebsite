import React from 'react'

function Navbar() {
    return (
        <div >
            <ul className='flex justify-center items-center gap-6 h-40 '>
                <a href="#donate">
                <li className='text-slate-50 text-lg cursor-pointer font-sans'>
                Donate
                </li>
                </a>
             
                
                <a href=" #about">
                <li className='text-slate-50 text-lg cursor-pointer font-sans' >
              About
                </li>
                </a>
               
                <a href="#thanks"> <li className='text-slate-50 text-lg cursor-pointer font-sans'>
                 Thanks
                </li></a>
               
            </ul>
        </div>
    )
}

export default Navbar
