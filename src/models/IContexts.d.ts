interface IListContext {
  isLoading: boolean
  modalConfirmIsOpen: boolean
  handleConfirmOpened: (data: any) => void
  handleModalConfirmDelete: () => void
  handleModalCancelDelete: () => void
  handleNew: () => void
  handleEdit: (data: any) => void
}

export { IListContext }
