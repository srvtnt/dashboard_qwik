import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";


export const onGet: RequestHandler = async ({cacheControl, next, redirect, cookie, sharedMap, url}) => {
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,    
  });

  const authCookie = cookie.get("authjs.session-token");
  const session = sharedMap.get("session")
  const pathname = url.pathname


  if( !pathname.startsWith("/panel") && session && authCookie) {
    throw redirect(308, '/panel'); // Redirigir si esta logueado e intenta acceder a ruta publica
  }

  await next();
};



export default component$(() => {
  return <Slot />;
});
