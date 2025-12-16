import { useForm } from '@mantine/form'
import { zod4Resolver } from 'mantine-form-zod-resolver'
import { credentialsSchema } from '../schemas'

export const useSignIn = () => {
  const credentialsForm = useForm({
    mode: 'uncontrolled',
    initialValues: {
      username: '',
      password: '',
    },
    validate: zod4Resolver(credentialsSchema),
  })

  const signIn = credentialsForm.onSubmit((values) => {
    console.log('Sign in with values:', values)
  })

  return {
    credentialsForm,
    signIn,
  }
}
