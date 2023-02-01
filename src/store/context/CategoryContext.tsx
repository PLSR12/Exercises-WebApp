import { Path } from 'common/config/pathsRoutes'
import { ICategoryContext } from 'models/ICategories'
import * as Pages from 'pages'
import * as React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CategoriesService from 'store/services/CategoriesService'

export const CategoryContext = React.createContext<ICategoryContext>({} as ICategoryContext)

export const CategoryProvider = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const { id } = useParams<{ id: string }>()
  const isCreate = !id
  const splitedId = id?.split(':')[1]
  const navigate = useNavigate()

  const onSubmit = async (values: any) => {
    const { name } = values

    console.log(values)

    const categoryForm: any = {
      name: name,
    }

    if (!isCreate) categoryForm.id = splitedId

    const action = isCreate ? CategoriesService.insert : CategoriesService.update

    setIsLoading(true)
    await action(categoryForm)
      .then(() => {
        setIsLoading(false)
        setTimeout(() => {
          navigate(Path.ListCategories)
        }, 500)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  return (
    <>
      <CategoryContext.Provider
        value={{
          isLoading,
          onSubmit,
          isCreate,
        }}
      >
        <Pages.CreateOrEditCategory />
      </CategoryContext.Provider>
    </>
  )
}
