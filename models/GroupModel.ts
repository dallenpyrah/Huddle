export default class Group {
  id: number
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
  color: string
  creatorId: number

  constructor (id: number, name: string, description: string, createdAt: Date, updatedAt: Date, color: string, creatorId: number) {
    this.id = id
    this.name = name
    this.description = description
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this.color = color
    this.creatorId = creatorId
  }
}
