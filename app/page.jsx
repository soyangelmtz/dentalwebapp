import React from 'react'

function page() {
  return (
    <main className=''>
      {/* 
      Seccion de banner
      */}
      <div className='w-full my-10 h-[700px]'>
        <img src="/homepage-banner.jpg" className='w-full h-full object-cover object-top' alt="" />
      </div>
      <div className='flex justify-center'>
        <div className='mx-auto h-full  mb-10'>
          <div className='flex px-5'>
            <p className='text-2xl mb-5'>📍 Av. Rómulo Garza 712, San Nicolás de los Garza</p>
          </div>
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d267.16088038500527!2d-100.22893039836843!3d25.72183322638137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662eb9944fdef9d%3A0xe63b629dcb859d55!2sADYM%20Atenci%C3%B3n%20Dental%20y%20M%C3%A9dica!5e0!3m2!1ses!2smx!4v1733916339589!5m2!1ses!2smx" width="1000" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">gegeg</iframe>
          </div>
        </div>
      </div>

    </main>
  )
}

export default page