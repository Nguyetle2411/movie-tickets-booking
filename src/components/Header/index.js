import React from 'react'
import Logo from 'assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const menu = [
  {
    label: 'Lịch chiếu'
  },
  {
    label: 'Cụm rạp'
  },
  {
    label: 'Tin tức'
  },
  {
    label: 'Ứng dụng'
  }
]

export default function Header() {
  const navigate = useNavigate()

  const account = localStorage.getItem('account')

  return (
    <div className="header h-16 flex items-center justify-between px-4">
      <Link to="/">
        <div className="header__logo w-12">
          <img src={Logo} alt="logo" />
        </div>
      </Link>
      <div className="header__menu">
        <ul className="flex">
          {menu.map(({ label }, index) => (
            <li key={index} className="px-4">
              <NavLink to={''}>{label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="header__user">
        {account ? (
          'Xin chào, ' + account
        ) : (
          <div
            className="cursor-pointer flex items-center text-gray-400 hover:text-black"
            onClick={() => navigate('/login')}
          >
            <AccountCircleIcon />
            <span className="pl-1">Đăng nhập</span>
          </div>
        )}
      </div>
    </div>
  )
}
