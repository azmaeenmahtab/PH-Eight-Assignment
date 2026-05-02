import { redirect } from 'next/dist/server/api-utils';
import { authClient } from './auth-client'
 
// This function can be marked `async` if using `await` inside
export function proxy(request) {

    const {session} = authClient.useSession()
    console.log(session);

    if(!session){
        redirect("/auth/login");
    }else{
        redirect("/")
    }
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: '/profile' ,
}