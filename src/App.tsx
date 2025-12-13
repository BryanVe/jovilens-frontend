import { useRoutes } from 'react-router'
import { Home, SignIn } from './pages'

const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/sign-in',
      element: <SignIn />,
    },
  ])

  return routes
}

export default App
