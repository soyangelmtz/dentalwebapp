import React from 'react'

function Navbar() {
  return (
    <nav className='w-full h-[120px] '>
        <div className=' w-full h-[45px] flex'>
            <div className='m-auto flex'>
                <p>Contacto: 812-3456-789</p>
            </div>
        </div>
        <div className=' w-full h-[75px] flex'>
          <div className='w-1/2 flex'>
            <a href='/' className='ml-10 p-1 '>
              <img src="/adymlogo.png" className='w-full h-full object-cover ' alt="" />
            </a>
          </div>
          <div className=' w-1/2 flex justify-center space-x-10'>
            <div className=' flex h-fit my-auto '>
              <a href='/about' className='m-auto cursor-pointer hover:-translate-y-px transition-all '>Nosotros</a>
            </div>
            <div className=' flex h-fit my-auto '>
              <a href='/contact' className='m-auto cursor-pointer hover:-translate-y-px transition-all'>Contacto</a>
            </div>
            <div className=' flex h-fit my-auto '>
              <a href='/services' className='m-auto cursor-pointer hover:-translate-y-px transition-all'>Servicios</a>
            </div>
            <div className=' flex h-fit my-auto '>
              <a href='/cita' className='m-auto cursor-pointer hover:-translate-y-px transition-all'>Agenda tu cita</a>
            </div>
            <div className=' flex h-fit my-auto'>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar