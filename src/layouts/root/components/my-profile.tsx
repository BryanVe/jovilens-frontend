import { Avatar, Button, Group, rem, Stack, Text } from '@mantine/core'
import { Link } from 'react-router'

export const MyProfile = () => {
  return (
    <Stack p="md">
      <Group>
        <Avatar
          styles={(theme) => ({
            placeholder: {
              backgroundColor: theme.colors.indigo[0],
              color: theme.colors.indigo[8],
              fontWeight: 600,
            },
          })}
        >
          BV
        </Avatar>
        <Stack flex={1} gap={0}>
          <Text fw={600} c="dark">
            Bryan Vera
          </Text>
          <Text w={rem(213)} truncate="end" size="sm" c="gray.7">
            bryan.ve.bv@gmail.com
          </Text>
        </Stack>
      </Group>
      <Button
        className="root-sidebar-active-surface"
        component={Link}
        to="/profile"
        variant="subtle"
      >
        Mi Perfil
      </Button>
    </Stack>
  )
}
