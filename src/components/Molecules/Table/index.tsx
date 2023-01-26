import { Table } from 'antd'
import * as S from './styles'

export const TableComponent = ({ data, columns, title, subTitle, extraButton }: any) => {
  return (
    <S.Container>
      <S.ContainerHeaderTable>
        <S.BoxHeader>
          <S.HeaderTitle>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
          </S.HeaderTitle>

          <S.BoxRightBar>{extraButton}</S.BoxRightBar>
        </S.BoxHeader>
      </S.ContainerHeaderTable>

      <S.ContainerSearchTable>
        <S.BoxFastFilters></S.BoxFastFilters>
        <S.BoxFastFilters></S.BoxFastFilters>
      </S.ContainerSearchTable>

      <S.ContainerTable>
        <Table dataSource={data} columns={columns} />
      </S.ContainerTable>

      <S.ContainerFooter></S.ContainerFooter>
    </S.Container>
  )
}
