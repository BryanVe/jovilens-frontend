import { Box } from '@mantine/core'

export const RightImage = () => (
  <Box
    component="aside"
    visibleFrom="lg"
    flex={1}
    h="100%"
    style={{
      backgroundImage: 'url("/images/sign-in.png")',
      backgroundPosition: 'left center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}
  />
)
