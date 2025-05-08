'use server'

import { getUserAuth } from "@/lib/auth"

export async function getUserId() {
    const userAuth = await getUserAuth()
    return userAuth?.value
}