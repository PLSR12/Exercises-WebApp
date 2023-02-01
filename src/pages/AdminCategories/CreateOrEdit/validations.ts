import * as yup from 'yup'

export const CategorySchema = yup.object().shape({
  name: yup.string().required('O campo "Nome" é obrigatório'),
})
