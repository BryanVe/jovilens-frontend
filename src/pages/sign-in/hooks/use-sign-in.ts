import { useForm } from '@mantine/form'
import { zod4Resolver } from 'mantine-form-zod-resolver'
import { useNavigate } from 'react-router'
import { credentialsSchema } from '../schemas'

export const useSignIn = () => {
  const navigate = useNavigate()
  const credentialsForm = useForm({
    mode: 'uncontrolled',
    initialValues: {
      username: '',
      password: '',
    },
    validate: zod4Resolver(credentialsSchema),
  })

  const signIn = credentialsForm.onSubmit((values) => {
    console.log({ values })
    void navigate('/')
  })

  return {
    credentialsForm,
    signIn,
  }
}
