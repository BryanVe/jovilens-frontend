import { Divider } from '@mantine/core'
import { MyProfile } from './my-profile'
import { MainItems } from './main-menu'
import { SecondaryItems } from './secondary-menu'

export const Sidebar = () => {
  return (
    <>
      <MyProfile />
      <Divider />
      <MainItems />
      <Divider />
      <SecondaryItems />
    </>
  )
}
