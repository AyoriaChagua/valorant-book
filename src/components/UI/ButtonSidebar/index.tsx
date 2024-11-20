import { Link } from 'react-router-dom'
import './index.css'
import { LucideIcon } from 'lucide-react'

interface Props {
  readonly pageName: string
  readonly link: string
  readonly collapsed: boolean
  readonly isActive: boolean
  readonly IconOutline: LucideIcon
  readonly IconFilled: LucideIcon
}

export default function ButtonSidebar({ pageName, link, IconOutline, IconFilled, collapsed, isActive }: Props) {
  return (
    <Link
      to={link}
      className={`button-sidebar ${isActive ? 'active' : ''}`}
    >
      <div className={`flex flex-row items-center gap-2 w-auto h-full ${!collapsed && 'justify-center'}`}>
        <div >
          {isActive ?
            <IconFilled className="w-5 h-5 fill-current" /> :
            <IconOutline className="w-5 h-5" />
          }
        </div>
        {collapsed && <span>{pageName}</span>}
      </div>
    </Link>
  )
}
