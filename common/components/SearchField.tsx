import React from 'react'

export default function SearchField() {
  return (
    <div className='bg-[#1E1D2E] rounded-2xl border border-[#4A4A4A] mt-6 flex items-center justify-between py-2.5 px-4'>
      <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="7" r="6.25" stroke="#C6C6C7" stroke-width="1.5" />
        <rect x="12" y="12" width="7" height="1.5" transform="rotate(45 12 12)" fill="#C6C6C7" />
      </svg>

      <input className='w-full pl-2 border-none outline-none text-[#C6C6C7] bg-transparent' type="text" placeholder='მოძებენე სასურველი ეპიზოდი' />

      <button className='bg-[#6422A1] cursor-pointer py-2 px-2.5 font-bold text-[14px] leading-[100%] rounded-[10px] text-[#FFFFFF]'>
        ფილტრი
      </button>
    </div>
  )
}

