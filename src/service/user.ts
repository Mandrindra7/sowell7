import { api } from "src/boot/axios";

export const getUserList = async () => {
    return await api.get("https://jsonplaceholder.typicode.com/users")
}