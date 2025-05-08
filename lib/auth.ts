import { cookies } from "next/headers";

export async function setUserAuth(token:string,userId: number)
{
    const cookieStore = await cookies();
    
    cookieStore.set("userToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
    });
    cookieStore.set("userId", userId.toString(), {
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        path: "/",
    });
}

export async function getUserToken()
{
    const cookieStore = await cookies(); 
    const userToken = cookieStore.get('userToken');
    return userToken
}

export async function getUserAuth()
{
    const cookieStore = await cookies(); 
    const userId = cookieStore.get('userId');
    return userId
}

export async function clearAuth()
{
    const cookieStore = await cookies();
    cookieStore.delete('userToken')
    cookieStore.delete('userId')
}