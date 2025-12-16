import { z } from 'zod'

export const credentialsSchema = z.object({
  username: z.string().min(2, { message: 'El nombre debe tener al menos 2 letras' }),
  password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
})
