import { useState } from 'react';
import ValorantLogo from '@/assets/svg/valorant.svg?url';
import { IoHeartOutline } from 'react-icons/io5';

export default function Navbar() {
  const [current, setCurrent] = useState('home');

  return (
    <nav className="bg-[#1C202C] w-full fixed top-0 z-10 backdrop-blur-lg h-14 flex items-center px-10">
      <div className="flex w-full space-x-4 justify-between">
        <button
          onClick={() => setCurrent('home')}
          style={{
            backgroundImage: `url(${ValorantLogo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '20px',
            height: '20px'
          }}
        />
        <button
          onClick={() => setCurrent('about')}
          className={`text-red-500`}
          style={{ fontFamily: 'Montserrat-Bold' }}
        >
          RADIANT BOT
        </button>
        <button
          onClick={() => setCurrent('contact')}
          className={`text-white ${current === 'contact' ? 'font-bold' : ''}`}
        >
          <IoHeartOutline style={{ fontSize: '20px' }} className="text-red-500" />
        </button>
      </div>
    </nav>
  );
}
