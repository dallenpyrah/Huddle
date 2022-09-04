import axios from 'axios'

const axiosBase: any = axios.create({
  baseURL: 'http://localhost:8001/api',
  timeout: 1000
})

export const axiosService = axiosBase
