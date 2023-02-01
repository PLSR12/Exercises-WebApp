import { Modal } from 'antd'

export const ModalConfirm = ({ isModalOpen, handleOk, handleCancel, title, text, textOk }: any) => {
  return (
    <Modal
      title={title}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={textOk}
      cancelText={'Cancelar'}
    >
      <p>{text}</p>
    </Modal>
  )
}
