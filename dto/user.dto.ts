export interface UserDto{
    firstName:string 
    lastName:string
    email:string,
    password:string
    phoneNumber:string
    role:"ADMIN"|"USER"
}
export interface UpdateDto{
    firstName?:string 
    lastName?:string
    email?:string,
    phoneNumber?:string
}