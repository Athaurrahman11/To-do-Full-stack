import { Plus, PlusIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className='flex bg-black text-white justify-around p-4'>
      <div>
        <h1 className='text-green-500 text-xl font-semibold ' >Thinkpad</h1>
      </div>
      <div className='hover:text-green-500 transition-all duration-150'>
         <Link to={"/create"}>
          <h1>Add New</h1>
        
         </Link>
        
      </div>
    </header>
  )
}

export default Navbar