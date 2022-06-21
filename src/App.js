import { Routes, Route } from 'react-router-dom'
import './App.css'
import routes from 'router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
require('assets/images/doctor-strange.jpeg')

function App() {
  const renderRoute = routes =>
    routes.map(({ path, name, children, element: Comp, ...rest }) => (
      <Route key={name} path={path} element={<Comp />}>
        {children && renderRoute(children)}
      </Route>
    ))
  return (
    <div className="App">
      <Routes>{renderRoute(routes)}</Routes>
      <ToastContainer />
    </div>
  )
}

export default App
