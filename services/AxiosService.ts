import axios, { AxiosInstance } from 'axios'

const axiosBase: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8001/api',
  timeout: 10000
})

export const axiosService = axiosBase
