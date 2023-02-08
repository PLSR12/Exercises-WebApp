import Dropzone from 'react-dropzone'
import { ErrorMessage } from '../ErrorMessage'
import * as S from './styles'

export const InputImage = ({ name, label, error, handleDrop, file, ref, ...props }: any) => {
  return (
    <S.Container>
      <S.FormItemStyled htmlFor={name}>{label}</S.FormItemStyled>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: 'dropzone' })}>
            <input
              type="file"
              ref={ref}
              {...props}
              name={name}
              id={name}
              accept="image/*"
              {...getInputProps()}
            />
            {file.length > 0 ? (
              <p>
                {file.map((file: any) => (
                  <li key={file}>{file?.name}</li>
                ))}
              </p>
            ) : (
              <p> Arraste sua imagem ou clique e selecione:</p>
            )}
          </div>
        )}
      </Dropzone>
      {!!error && <ErrorMessage>{error?.message}</ErrorMessage>}
    </S.Container>
  )
}
