import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Stack, Text, ThemeIcon, Title } from '@mantine/core'

export const Header = () => {
  return (
    <Stack gap={0}>
      <ThemeIcon hiddenFrom="lg" variant="light" mx="auto" mb="sm" size={40}>
        <FontAwesomeIcon icon={faLock} size="xl" />
      </ThemeIcon>
      <Title c="dark.5" ta={{ base: 'center', lg: 'left' }} fz={{ base: 'h2', xs: 'h1' }}>
        Accede a tu cuenta
      </Title>
      <Text c="gray.6" ta={{ base: 'center', lg: 'left' }} fz={{ base: 'sm', xs: 'md' }}>
        Bienvenido de nuevo, por favor introduce tus datos
      </Text>
    </Stack>
  )
}
