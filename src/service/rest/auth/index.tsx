import { api } from "@/src/lib/axios"
import { trCache } from "@/src/lib/tryCatch"
import { RegisterFormData } from "@/src/schemas/auth.schema"




export const register = async ({ email, password, confirmPassword, fullName }: RegisterFormData) => {
    const [result, err] = await trCache(async () => {
        return await api.post(`/users`, {
            email,
            password,
            confirmPassword,
            fullName
        })
    })
    if (err || !result) throw err
    return result
}

export const login = async ({ email, password }: { email: string; password: string }) => {
    const [result, err] = await trCache(async () => {
        return await api.post(`/users/login`, {
            email,
            password
        }, {
            withCredentials: true,
        })
    })
    if (err || !result) throw err
    return result
}

export const logout = async () => {
    const [result, err] = await trCache(async () => {
        return await api.post(`/users/logout`, {}, {
            withCredentials: true,
        })
    })
    if (err || !result) throw err
    return result
}

export const forgotPassword = async ({ email }: { email: string }) => {
    const [result, err] = await trCache(async () => {
        return await api.post(`/users/forgot-password`, {
            email
        })
    })
    if (err || !result) throw err
    return result
}

export const resetPassword = async ({ 
    email, 
    password, 
    confirmPassword 
}: { 
    email: string
    password: string
    confirmPassword: string 
}) => {
    const [result, err] = await trCache(async () => {
        return await api.post(`/users/reset-password`, {
            email,
            password,
            confirmPassword
        })
    })
    if (err || !result) throw err
    return result
}

export const fetchMe = async () => {
    const [result, err] = await trCache(async () => {
        return await api.get(`/users/me`, {
            withCredentials: true,
        })
    })
    if (err || !result) throw err
    return result
}
