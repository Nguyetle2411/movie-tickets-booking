import Core from '.'
import Home from 'views/Home/route'
import MovieDetail from 'views/MovieDetail/route'
import NotFound from 'views/NotFound'
import Booking from 'views/Booking/route'
import Login from 'views/Login/route'

const route = [
  {
    path: '/',
    name: 'Core',
    element: Core,
    children: [
      ...Home,
      ...MovieDetail,
      {
        auth: false,
        path: '*',
        name: '*',
        layout: {
          header: false,
          sidebar: false,
          footer: false
        },
        element: NotFound
      }
    ]
  },
  ...Booking,
  ...Login
]

export default route
