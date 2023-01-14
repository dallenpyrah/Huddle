import { injectable } from 'inversify'
import axios, { AxiosInstance } from 'axios'
import { IAxiosService } from '../../auth/interfaces/service/IAxiosService'
import 'reflect-metadata'

@injectable()
export class AxiosService implements IAxiosService {
  private readonly axiosInstance: AxiosInstance

  constructor () {
    this.axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_AXIOS_BASE_URL,
      timeout: 10000
    })
  }

  public getAxiosInstance (): AxiosInstance {
    return this.axiosInstance
  }
}
