import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Static files and Next.js internals skip
    '/((?!_next|.*\\.(?:ico|png|jpg|jpeg|svg|css|js|json|txt|woff|woff2|ttf|eot|otf|mp4|webm|ogg|mp3|wav|zip|rar|7z|pdf)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
