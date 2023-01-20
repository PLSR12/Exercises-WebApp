import { Table } from 'antd'
import * as S from './styles'

export const TableComponent = ({ data, columns, title }: any) => {
  return (
    <S.Container>
      <h1>{title}</h1>
      <Table dataSource={data} columns={columns} />
    </S.Container>
  )
}
