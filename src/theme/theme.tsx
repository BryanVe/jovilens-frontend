import { createTheme } from '@mantine/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'

export const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  primaryColor: 'blue',
  colors: {
    blue: [
      '#E6EFFF',
      '#B9D1FE',
      '#8CB4FD',
      '#5F97FC',
      '#3279FB',
      '#055CFA',
      '#0449C8',
      '#033796',
      '#022564',
      '#011232',
    ],
  },
  components: {
    PasswordInput: {
      defaultProps: {
        visibilityToggleIcon: ({ reveal }: { reveal: boolean }) => (
          <FontAwesomeIcon icon={reveal ? faEyeSlash : faEye} />
        ),
      },
    },
  },
})
