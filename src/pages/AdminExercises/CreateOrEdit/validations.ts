import * as yup from 'yup'

export const ExerciseSchema = yup.object().shape({
  name: yup.string().required('O campo "Nome" é obrigatório'),
  objective: yup.string().required('O campo "Objetivo" é obrigatório'),
  linkvideo: yup.string().required('O campo "Link do Vídeo" é obrigatório'),
  categoryId: yup.string().required('O campo "Categoria" é obrigatório'),
  description: yup.string().required('O campo "Descrição" é obrigatório'),
})
