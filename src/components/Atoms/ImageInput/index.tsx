import { Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
import type { RcFile, UploadFile } from 'antd/es/upload/interface'
import { ErrorMessage } from '../ErrorMessage'
import * as S from './styles'

/*
{
      uid: string
      name: string
      status: string
      url: string
    }
*/
interface InputImageProps {
  fileList: any[]
  onChange: any
  maximumFiles: number
  name: string
  label: string
  error: any
}

export const InputImage = ({
  fileList,
  onChange,
  maximumFiles,
  name,
  label,
  error,
}: InputImageProps) => {
  const onPreview = async (file: UploadFile) => {
    let src = file.url as string
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj as RcFile)
        reader.onload = () => resolve(reader.result as string)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow?.document.write(image.outerHTML)
  }

  return (
    <S.Container>
      <S.FormItemStyled htmlFor={name}>{label}</S.FormItemStyled>
      <ImgCrop rotate>
        <Upload
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
          accept="image/*"
        >
          {fileList.length < maximumFiles && '+ Upload'}
        </Upload>
      </ImgCrop>
      {!!error && <ErrorMessage>{error?.message}</ErrorMessage>}
    </S.Container>
  )
}
