import axios, { AxiosInstance } from 'axios'

const axiosBase: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AXIOS_BASE_URL,
  timeout: 10000
})

export const axiosService = axiosBase
