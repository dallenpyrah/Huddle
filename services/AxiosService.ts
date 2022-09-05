import axios from 'axios'

const axiosBase: any = axios.create({
  baseURL: 'http://localhost:8001/api',
  timeout: 10000
})

export const axiosService = axiosBase
