import { Avatar, Button, Group, rem, Stack, Text } from '@mantine/core'
import { Link } from 'react-router'

export const MyProfile = () => {
  return (
    <Stack p="md">
      <Group>
        <Avatar name="Bryan Vera" color="blue" />
        <Stack flex={1} gap={0}>
          <Text fw={600} c="dark">
            Bryan Vera
          </Text>
          <Text w={rem(213)} truncate="end" size="sm" c="gray.7">
            bryan.ve.bv@gmail.com
          </Text>
        </Stack>
      </Group>
      <Button component={Link} to="/profile" variant="light">
        Mi Perfil
      </Button>
    </Stack>
  )
}
