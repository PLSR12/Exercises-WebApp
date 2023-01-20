import { Table } from 'antd'

export const TableComponent = ({ data, columns, title }: any) => {
  return (
    <div>
      <h1> {title} </h1>
      <Table dataSource={data} columns={columns} />;
    </div>
  )
}
