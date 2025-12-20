import { createBrowserRouter, RouterProvider } from 'react-router'
import {
  Home,
  MedicalRecords,
  Patients,
  Permissions,
  Profile,
  Roles,
  Settings,
  SignIn,
  Users,
} from './pages'
import { Root } from './layouts'

const router = createBrowserRouter([
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/patients',
        element: <Patients />,
      },
      {
        path: '/medical-records',
        element: <MedicalRecords />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/roles',
        element: <Roles />,
      },
      {
        path: '/permissions',
        element: <Permissions />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
