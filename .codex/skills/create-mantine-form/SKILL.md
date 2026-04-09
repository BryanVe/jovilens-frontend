---
name: create-mantine-form
description: Use this skill when creating or refactoring a non-trivial form in this React + TypeScript + Mantine project. Use it when the work should follow the local pattern of Mantine `useForm`, local Zod schemas, and a focused separation between form UI and form logic. Do not use it for static UI, tiny one-field interactions, or unrelated component work.
---

# Create Mantine Form

Use this skill to create or refactor a form that matches the project conventions without over-abstracting it.

## Use This Skill When

- The user asks for a new form or to refactor an existing form.
- The form has multiple fields, validation rules, or submit behavior.
- The feature should use Mantine form state and Zod validation.

## Do Not Use This Skill When

- The task is display-only UI.
- The interaction is trivial enough for a single local state value.
- The surrounding module already uses a different explicit pattern and consistency matters more than this skill.

## Repository Pattern To Prefer

- Inspect the nearest feature first and copy its structure before inventing a new one.
- For non-trivial forms, prefer:
  - A local hook such as `use-sign-in.ts` for `useForm`, `initialValues`, validation, and submit orchestration.
  - A local schema file such as `schemas.ts` when the validation contract is feature-specific.
  - A focused UI component that renders fields and delegates form state to the hook.
- Prefer `useForm` from `@mantine/form`.
- Prefer `mode: 'uncontrolled'` unless the nearby feature clearly uses another mode.
- Prefer `zod4Resolver` from `mantine-form-zod-resolver`.
- Keep form field names, schema keys, initial values, and submit payload aligned.
- Keep the form local to the feature until real reuse exists.

## Recommended Workflow

1. Inspect nearby files in the same page or feature.
2. Decide whether the form logic belongs inline or in a local hook.
3. Create or reuse a local Zod schema if the form is non-trivial.
4. Define `initialValues` that match the schema shape.
5. Wire validation through `zod4Resolver`.
6. Keep submit logic in the hook or closest owning module, not scattered across inputs.
7. Use Mantine inputs and layout primitives already common in the surrounding code.
8. Only extract shared helpers or components if reuse is real.

## Preferred File Shape

For a typical feature form, prefer this structure:

```text
src/pages/<feature>/
- components/
  - <feature>-form.tsx
- hooks/
  - use-<feature>-form.ts
- schemas.ts
```

This is a preference, not a hard rule. If the nearby module keeps the hook and component together, follow that local pattern.

## Example Pattern

Schema:

```ts
import { z } from 'zod'

export const patientFormSchema = z.object({
  firstName: z.string().min(1, { message: 'Ingresa el nombre' }),
  lastName: z.string().min(1, { message: 'Ingresa el apellido' }),
  email: z.email({ message: 'Ingresa un correo valido' }).optional().or(z.literal('')),
})

export type PatientFormValues = z.infer<typeof patientFormSchema>
```

Hook:

```ts
import { useForm } from '@mantine/form'
import { zod4Resolver } from 'mantine-form-zod-resolver'
import { patientFormSchema, type PatientFormValues } from '../schemas'

type UsePatientFormOptions = {
  onSubmit: (values: PatientFormValues) => void | Promise<void>
}

export const usePatientForm = ({ onSubmit }: UsePatientFormOptions) => {
  const form = useForm<PatientFormValues>({
    mode: 'uncontrolled',
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate: zod4Resolver(patientFormSchema),
  })

  const handleSubmit = form.onSubmit(async (values) => {
    await onSubmit(values)
  })

  return {
    form,
    handleSubmit,
  }
}
```

UI component:

```tsx
import { Button, Group, Stack, TextInput } from '@mantine/core'
import { usePatientForm } from '../hooks/use-patient-form'

type PatientFormProps = {
  onSubmit: Parameters<typeof usePatientForm>[0]['onSubmit']
}

export const PatientForm = ({ onSubmit }: PatientFormProps) => {
  const { form, handleSubmit } = usePatientForm({ onSubmit })

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <TextInput
          label="Nombres"
          key={form.key('firstName')}
          {...form.getInputProps('firstName')}
        />
        <TextInput
          label="Apellidos"
          key={form.key('lastName')}
          {...form.getInputProps('lastName')}
        />
        <TextInput label="Correo" key={form.key('email')} {...form.getInputProps('email')} />
        <Group justify="end">
          <Button type="submit">Guardar</Button>
        </Group>
      </Stack>
    </form>
  )
}
```

## Adaptation Rules

- If the feature is small, keep the schema and hook closer together.
- If the form is mostly presentational and only one component owns it, the hook can stay in the same folder as the component.
- If nearby code does not use `form.key(...)`, follow the surrounding input binding style instead of forcing it.
- If inputs need value transformation, keep the transformation close to submit or schema boundaries instead of spreading it across event handlers.
- For dates, use the project `dayjs` convention when formatting or transforming values.

## Things To Avoid

- Mixing manual `useState` field state with Mantine form state without a clear reason.
- Duplicating validation in UI handlers and Zod at the same time.
- Creating a shared form helper too early.
- Putting large business rules, async orchestration, and long JSX markup in one file if a local hook would make ownership clearer.

## Done Criteria

- The form matches nearby project patterns first.
- Validation is schema-driven when the form is non-trivial.
- The submit path is easy to trace.
- The change stays local and does not introduce new dependencies.
- Before finishing, run:
  - `pnpm lint`
  - `pnpm format:check`
  - `pnpm typecheck`
  - `pnpm build`
