import { Select } from 'antd'
import React from 'react'
import { ErrorMessage } from '../ErrorMessage'
import * as S from './styles'

export const SelectComponent: React.FC<any> = React.forwardRef(
  ({ name, id, placeholder, defaultValue, onSearch, onChange, label, error, options }, ref) => {
    return (
      <S.Container>
        <S.FormItemStyled htmlFor={name}>{label}</S.FormItemStyled>
        <Select
          size="large"
          showSearch
          placeholder={placeholder}
          optionFilterProp="children"
          defaultValue={defaultValue}
          onSearch={onSearch}
          onChange={onChange}
          filterOption={(input: any, option: any) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={options}
        />
        {!!error && <ErrorMessage>{error?.message}</ErrorMessage>}
      </S.Container>
    )
  }
)

SelectComponent.displayName = 'SelectComponent'
