import { component$, Slot } from "@builder.io/qwik";
import { RequestHandler } from "@builder.io/qwik-city";
import Navbar from "~/components/layout/dashboard/Navbar";
import Sidebar from "~/components/layout/dashboard/Sidebar";


export const onRequest: RequestHandler = async ({ next, redirect, cookie, sharedMap, url}) => {

  const authCookie = cookie.get("authjs.session-token");
  const session = sharedMap.get("session")
  const pathname = url.pathname
  if( pathname.startsWith("/panel") && !session && !authCookie) {
    throw redirect(308, '/autenticacion/ingreso'); // Redirigir si no esta logueado e intenta acceder a ruta privada
  }

  await next();
};



export default component$(() => {
  return (
    <div class="flex h-screen w-full">
      {/* Sidebar */}
      <div class="hidden h-full w-64 xl:fixed xl:block">
        <Sidebar />
      </div>

      {/* Main content */}
      <div class="flex w-full flex-col xl:ml-64">
        <Navbar />

        {/* Slot container */}
        <div class="flex-grow bg-gray-50 p-6 dark:bg-gray-900">
          <Slot />
        </div>
      </div>
    </div>
  );
});
