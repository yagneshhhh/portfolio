import React from 'react'

const NotFound = () => {
  return (
    <div className=' '>
      <div className='flex flex-items-center px-24 py-8 justify-center '>
        <img
                    src="/zoro.png"
                    alt="Scroll indicator"
                    className="w-24 h-24 md:w-45 md:h-50 sm:w-50 sm:h-45 object-contain"
        />
      </div>
      <div>
        <h1 className='text-5xl font-bold'>
          <span className='text-primary '>404</span>
        </h1>
        <h2 className='font-semibold'>Oops ! Looks like you are lost !</h2>
      </div>
      <div className='py-12'>
        <a href='/ ' className='cosmic-button'>
          GO BACK
        </a>
      </div>
    </div>
  )
}

export default NotFound