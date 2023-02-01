import { Path } from 'common/config/pathsRoutes'
import { AllCategories, ICategoriesListContext } from 'models/ICategories'
import * as Pages from 'pages'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { CategoryService } from 'store/services'

export const CategoriesContext = React.createContext<ICategoriesListContext>(
  {} as ICategoriesListContext
)

export const CategoriesProvider = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [modalConfirmIsOpen, setModalConfirmIsOpen] = React.useState<boolean>(false)
  const [dataForAction, setDataForAction] = React.useState<AllCategories | undefined>(undefined)
  const [categories, setCategories] = React.useState<AllCategories[]>([])
  const navigate = useNavigate()

  const getCategories = async () => {
    try {
      setIsLoading(true)
      const allCategories: any = await CategoryService.getAll()

      setCategories(allCategories)
    } finally {
      setIsLoading(false)
    }
  }

  const handleNew = () => {
    navigate(Path.CreateCategory)
  }

  const handleEdit = (data: any) => {
    navigate(`/edit-category/:${data.id}`, { state: data })
  }

  const handleConfirmOpened = (data: any) => {
    setDataForAction(data)
    setModalConfirmIsOpen(true)
  }

  const handleModalConfirmDelete = async () => {
    await CategoryService.del(dataForAction?.id)

    setTimeout(() => {
      setModalConfirmIsOpen(false)
      getCategories()
    })
  }

  const handleModalCancelDelete = () => {
    setModalConfirmIsOpen(false)
  }

  React.useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      <CategoriesContext.Provider
        value={{
          isLoading,
          modalConfirmIsOpen,
          handleConfirmOpened,
          handleModalConfirmDelete,
          handleModalCancelDelete,
          categories,
          handleNew,
          handleEdit,
        }}
      >
        <Pages.ListCategories />
      </CategoriesContext.Provider>
    </>
  )
}
