import * as Yup from 'yup'

export const LogInSchema = Yup.object().shape({
  email: Yup.string().required(`O campo "email" deve ser preenchido!`).email('E-mail inválido!'),
  password: Yup.string().required(`O campo "senha" deve possuir no mínino 6 caracteres.`).min(6),
})
