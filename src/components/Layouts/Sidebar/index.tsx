import ButtonSidebar from '@/components/UI/ButtonSidebar';
import { useEffect, useState } from 'react';
import ValorantLogo from '@/assets/svg/valorant.svg?url';
import { Bookmark, BookmarkIcon, HelpCircle, HelpCircleIcon, Home, HomeIcon, Menu } from 'lucide-react';
import { useLocation } from 'react-router-dom';


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(true);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    {
      pageName: 'Home',
      link: '/valorant-book/',
      IconOutline: Home,
      IconFilled: HomeIcon
    },
    {
      pageName: 'Saved',
      link: '/valorant-book/saved',
      IconOutline: Bookmark,
      IconFilled: BookmarkIcon
    },
    {
      pageName: 'About',
      link: '/valorant-book/about',
      IconOutline: HelpCircle,
      IconFilled: HelpCircleIcon
    }
  ];

  return (
    <>
      {isMobile && (
        <div className="w-20 fixed top-3 left-6 z-40 p-1 ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-5 h-5  bg-cover bg-center text-red-500"
          >
            <Menu />
          </button>
        </div>
      )}

      <div
        className={`
          fixed md:relative
          h-screen
          bg-[#1c202d]
          transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          ${isMobile ? 'z-40' : ''}
        `}
      >
        <div className="w-20 flex flex-col gap-5 px-5 pb-5 items-center h-full py-4">
          <button
            className="w-5 h-5 mb-5 bg-cover bg-center"
            style={{
              backgroundImage: `url(${ValorantLogo})`
            }}
          />


          {menuItems.map((item) => (
            <ButtonSidebar
              key={item.pageName}
              pageName={item.pageName}
              link={item.link}
              IconOutline={item.IconOutline}
              IconFilled={item.IconFilled}
              collapsed={false}
              isActive={location.pathname === item.link}
            />
          ))}
        </div>
      </div>

      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
