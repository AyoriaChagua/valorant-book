import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './index.css'

interface Props {
  pageName: string
  link: string
  icon: ReactNode
}

export default function ButtonSidebar({ pageName, link, icon }: Props) {
  const location = useLocation();
  const isActive = location.pathname === link;
  return (
    <Link
      to={link}
      className={`button-sidebar ${isActive ? 'active' : ''}`}
    >
      <div className='flex flex-row items-center gap-2'>
        {icon}
        {pageName}
      </div>
    </Link>
  )
}
