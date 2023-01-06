import { HttpService } from './httpService'

const basePath = '/Category'

export const CategoryService = {
  getAll,
  insert,
  update,
  del,
  getById,
}

async function getAll() {
  return await HttpService.get(basePath)
}

async function insert(data: any) {
  return await HttpService.post(`${basePath}`, data)
}

async function update({ data, id }: any) {
  return await HttpService.put(`${basePath}/${id}`, data)
}

async function del(data: any) {
  return await HttpService.delete(`${basePath}/${data}`)
}

async function getById(id: any) {
  return await HttpService.get(`${basePath}/${id}`)
}

export default CategoryService
