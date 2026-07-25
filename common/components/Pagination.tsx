
export default function Pagination() {
  return (
    <div className='flex items-center'>
      <button className='w-10 h-10  flex items-center justify-center rounded-full bg-[#30105A]'>
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z" fill="white" />
        </svg>
      </button>

      <div className='px-6 flex items-center justify-between md:gap-4'>
        <button className='w-10 bg-white h-10 text-[#0E0417] flex items-center justify-center rounded-full'>
          1
        </button>

        <button className='w-10 h-10 text-white flex items-center justify-center rounded-full'>
          2
        </button>

        <button className='w-10 h-10 text-white flex items-center justify-center rounded-full'>
          3
        </button>

        <span className='w-10 h-10 text-white flex items-center justify-center '>
          ...
        </span>

        <button className='w-10 h-10 text-white flex items-center justify-center rounded-full'>
          23
        </button>
      </div>

      <button className='w-10 h-10 flex items-center justify-center rounded-full bg-[#30105A]'>
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10.59L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.59Z" fill="white" />
        </svg>
      </button>
    </div>
  )
}

