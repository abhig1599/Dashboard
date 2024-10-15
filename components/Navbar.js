import Image from 'next/image';
import logo from '@/Assets/Profile.png'

export default function Navbar({ name }) {
    return (
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">{name}</h1>
        
        <div className="flex items-center space-x-4">
          <button className="relative">
            <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full px-1">10</span>
            <i className="fas fa-bell text-gray-600"></i>
          </button>
          
          <button className="relative">
            <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full px-1">4</span>
            <i className="fas fa-envelope text-gray-600"></i>
          </button>
          <Image src={logo} alt="Logo" width={10} height={10} className="w-8 h-8 rounded-full"/>
        </div>
      </nav>
    );
  }