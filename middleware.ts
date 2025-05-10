import { NextRequest, NextResponse } from 'next/server';
import { getUserToken } from './lib/auth';

// 1. Specify protected routes
const protectedRoutes = ['/dashboard'];

// 2. Regex pattern for quizzes/[id] (this will match /quizzes/{id} where id is a number)
const quizzesPattern = /^\/quizzes\/\d+/;

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;

    // Check if the path is a protected route or matches the quizzes pattern
    const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route)) || quizzesPattern.test(path);

    // 3. Get the user auth token
    const user_token = await getUserToken();

    // 4. Handle protected routes
    if (isProtectedRoute && !user_token) {
        // Redirect to login page if user token is not found
        return NextResponse.redirect(new URL('/', req.nextUrl));
    }

    // Continue the request if the user is authenticated or if the route is not protected
    return NextResponse.next();
}