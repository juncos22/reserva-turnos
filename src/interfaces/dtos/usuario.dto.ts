export interface RegisterUserDTO {
    first_name: string;
    last_name: string;
    email: string;
    username: string
    password: string;
}

export interface LoginUserDTO {
    username: string;
    password: string;
}