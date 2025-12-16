import {
  Button,
  Center,
  PasswordInput,
  rem,
  Stack,
  TextInput,
  type TextInputProps,
} from '@mantine/core'
import { useSignIn } from '../hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Header } from './header'

const commonLabelProps: TextInputProps['labelProps'] = {
  tt: 'uppercase',
  fw: 600,
  style: {
    fontSize: rem(12),
  },
}

export const MainContent = () => {
  const { credentialsForm, signIn } = useSignIn()

  return (
    <Center
      maw={{
        base: '100%',
        lg: '50%',
      }}
      px={{
        base: 'lg',
        sm: 0,
      }}
    >
      <Stack>
        <Header />
        <form onSubmit={signIn}>
          <Stack>
            <TextInput
              autoCapitalize="none"
              labelProps={commonLabelProps}
              label="Correo electrónico"
              placeholder="tu@correo.com"
              key={credentialsForm.key('username')}
              {...credentialsForm.getInputProps('username')}
            />
            <PasswordInput
              labelProps={commonLabelProps}
              label="Contraseña"
              placeholder="Introduce tu contraseña"
              key={credentialsForm.key('password')}
              {...credentialsForm.getInputProps('password')}
            />
            <Button
              fullWidth
              radius="md"
              h={42}
              type="submit"
              rightSection={<FontAwesomeIcon icon={faChevronRight} />}
            >
              Acceder
            </Button>
          </Stack>
        </form>
      </Stack>
    </Center>
  )
}
