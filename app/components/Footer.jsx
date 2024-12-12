import React from 'react'

function Footer() {
  return (
    <div className='bg-black/40 w-full h-[70vh] flex justify-center'>
        <div className='pt-10 max-w-[22vw]'>
            <p className='font-bold text-xl'>Ubicación</p>
            <div className='border w-[120px] mt-1 mb-3'></div>
            <p className='mb-5'>📍 Av. Rómulo Garza 712, San Nicolás de los Garza</p>
            <p>Dra. Ada Isela Valadez Treviño</p>
            <p>Cédula Profesional 3324269 UANL</p>
            <p>Tel: 8121525458</p>
        </div>
        <div className='border pt-10 max-w-[22vw] '>
          <p className='font-bold text-xl'>Horario</p>
          <div className='border w-[120px] mt-1 mb-3'></div>
          <p></p>
        </div>
        <div className='border pt-10 max-w-[22vw] '></div>
    </div>
  )
}

export default Footer