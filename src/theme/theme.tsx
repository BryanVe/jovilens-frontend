import type { ActionIconProps, ButtonProps, MantineTheme } from '@mantine/core'
import { createTheme, defaultVariantColorsResolver } from '@mantine/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'

export const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  primaryColor: 'indigo',
  primaryShade: 8,
  variantColorResolver: (input) => {
    const defaultResolvedColors = defaultVariantColorsResolver(input)
    const { color, theme, variant } = input

    const primaryShade =
      typeof theme.primaryShade === 'number' ? theme.primaryShade : theme.primaryShade.light

    const resolvedColor =
      typeof color === 'string' && color in theme.colors ? color : theme.primaryColor

    if (variant === 'light') {
      return {
        background: `var(--mantine-color-${resolvedColor}-0)`,
        hover: `var(--mantine-color-${resolvedColor}-1)`,
        color:
          resolvedColor === 'gray'
            ? 'var(--mantine-color-dark-6)'
            : `var(--mantine-color-${resolvedColor}-${primaryShade})`,
        border: '1px solid transparent',
      }
    }

    if (variant === 'subtle') {
      return {
        background: 'transparent',
        hover: `var(--mantine-color-${resolvedColor}-0)`,
        color:
          resolvedColor === 'gray'
            ? 'var(--mantine-color-dark-6)'
            : `var(--mantine-color-${resolvedColor}-${primaryShade})`,
        hoverColor:
          resolvedColor === 'gray'
            ? 'var(--mantine-color-dark-6)'
            : `var(--mantine-color-${resolvedColor}-${primaryShade})`,
        border: '1px solid transparent',
      }
    }

    if (variant === 'transparent') {
      return {
        background: 'transparent',
        hover: 'transparent',
        color:
          resolvedColor === 'gray'
            ? 'var(--mantine-color-dark-6)'
            : `var(--mantine-color-${resolvedColor}-${primaryShade})`,
        hoverColor:
          resolvedColor === 'gray'
            ? 'var(--mantine-color-dark-6)'
            : `var(--mantine-color-${resolvedColor}-${primaryShade})`,
        border: '1px solid transparent',
      }
    }

    return defaultResolvedColors
  },
  defaultRadius: 'md',
  spacing: {
    xs: '0.625rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
  },
  headings: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: { fontSize: '2rem', lineHeight: '1.2', fontWeight: '700' },
      h2: { fontSize: '1.5rem', lineHeight: '1.25', fontWeight: '700' },
      h3: { fontSize: '1.25rem', lineHeight: '1.3', fontWeight: '600' },
      h4: { fontSize: '1.125rem', lineHeight: '1.35', fontWeight: '600' },
      h5: { fontSize: '1rem', lineHeight: '1.4', fontWeight: '600' },
      h6: { fontSize: '0.875rem', lineHeight: '1.4', fontWeight: '600' },
    },
  },
  components: {
    PasswordInput: {
      defaultProps: {
        visibilityToggleIcon: ({ reveal }: { reveal: boolean }) => (
          <FontAwesomeIcon icon={reveal ? faEyeSlash : faEye} />
        ),
      },
    },
    Container: {
      defaultProps: {
        size: 'xl',
      },
    },
    Card: {
      defaultProps: {
        radius: 'md',
        withBorder: true,
        padding: 'lg',
      },
    },
    Button: {
      defaultProps: {
        radius: 'md',
      },
      styles: (theme: MantineTheme, props: ButtonProps) => ({
        root: {
          fontWeight: 600,
          ...(props.variant === 'default'
            ? {
                backgroundColor: theme.white,
                borderColor: theme.colors.gray[3],
                color: theme.colors.dark[6],
              }
            : {}),
          ...(props.variant === 'light' && props.color === 'gray'
            ? {
                backgroundColor: theme.colors.gray[0],
                color: theme.colors.dark[6],
              }
            : {}),
        },
      }),
    },
    ActionIcon: {
      defaultProps: {
        radius: 'md',
        variant: 'default',
        color: 'gray',
      },
      styles: (theme: MantineTheme, props: ActionIconProps) => ({
        root: {
          ...(props.variant === 'default'
            ? {
                backgroundColor: theme.white,
                borderColor: theme.colors.gray[3],
                color: theme.colors.dark[6],
              }
            : {}),
          ...(props.variant === 'light' && props.color === 'gray'
            ? {
                backgroundColor: theme.colors.gray[0],
                color: theme.colors.dark[6],
              }
            : {}),
        },
      }),
    },
    Badge: {
      defaultProps: {
        fw: 600,
        variant: 'light',
        tt: 'unset',
      },
    },
    ThemeIcon: {
      defaultProps: {
        color: 'indigo',
        radius: 'md',
      },
    },
    TextInput: {
      defaultProps: {
        radius: 'md',
      },
    },
    Select: {
      defaultProps: {
        radius: 'md',
      },
    },
    Tabs: {
      defaultProps: {
        radius: 'md',
      },
    },
  },
})
