export default interface Task {
    id?: string;
    description: string;
    status: string;
    completedAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}