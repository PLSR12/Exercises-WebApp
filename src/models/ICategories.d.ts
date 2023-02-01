import { IListContext } from 'models/IContexts'

interface AllCategories {
  id: number
  name: string
}

interface ICategoriesListContext extends IListContext {
  categories: AllCategories[]
}

interface ICategoryContext {
  isLoading: boolean
  onSubmit: (values: any) => void
  isCreate: boolean
}

export { AllCategories, ICategoriesListContext, ICategoryContext }
