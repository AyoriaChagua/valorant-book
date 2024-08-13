import ButtonSidebar from '@/components/UI/ButtonSidebar';
import { useState } from 'react';
import { CiCircleQuestion } from 'react-icons/ci';
import { FaBookmark } from 'react-icons/fa';
import { GoHomeFill } from 'react-icons/go';


export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  let hoverTimer: ReturnType<typeof setTimeout>;

  const handleMouseEnter = () => {
    hoverTimer = setTimeout(() => {
      setCollapsed(false);
    }, 1100);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer);
    setCollapsed(true);
  };

  return (
    <div
      className='w-48 flex flex-col gap-5 p-5 bg-[#1C202C] h-screen pt-20'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ButtonSidebar
        pageName='Home'
        link='/valorant-book/'
        icon={<GoHomeFill />}
      />
      <ButtonSidebar
        pageName='Saved'
        link='/valorant-book/saved'
        icon={<FaBookmark />}
      />
      <ButtonSidebar
        pageName='About'
        link='/valorant-book/about'
        icon={<CiCircleQuestion className='text-xl font-extrabold'/>}
      />
    </div>
  );
}
