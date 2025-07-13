export interface CreateUser {
    name: string;
    email: string;

    avatar?: string;
}
export interface LoginUser {
    email: string;
    password: string
}