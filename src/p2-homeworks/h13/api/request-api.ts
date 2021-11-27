import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
})

export const requestApi = {
    createPost(value: boolean) {
        return instance.post<CreatePostType>('auth/test', {success: value})
    }
}


type CreatePostType = {
    errorText: string
    info: string
    yourBody: {
        success: boolean
    }
    yourQuery: {}
}