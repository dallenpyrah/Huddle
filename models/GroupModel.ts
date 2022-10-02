import { User } from "firebase/auth";

export default class GroupModel {
    id: string;
    name: string;
    description: string;
    creatorId: number;
    users: User[];
    createdAt: Date;
    updatedAt: Date;
    color: string;

    constructor(id: string, name: string, description: string, creatorId: number, users: User[], createdAt: Date, updatedAt: Date, color: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.creatorId = creatorId;
        this.users = users;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.color = color;
    }
}