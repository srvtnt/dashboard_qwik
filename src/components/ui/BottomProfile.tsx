import { component$ } from '@builder.io/qwik';

export const BottomProfile = component$(() => {
  return (
        <>  
            <button
                type="button"
                class="mx-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 md:mr-0 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="dropdown"
            >
                <span class="sr-only">Open user menu</span>
                <img
                class="h-8 w-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user photo"
                height={300}
                width={300}
                />
            </button>
            <div
                class="z-50 my-4 hidden w-56 list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
                id="dropdown"
            >
            <div class="px-4 py-3">
              <span class="block text-sm font-semibold text-gray-900 dark:text-white">
                Neil sims
              </span>
              <span class="block truncate text-sm text-gray-500 dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul
              class="py-1 text-gray-500 dark:text-gray-400"
              aria-labelledby="dropdown"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Mi Perfil
                </a>
              </li>
            </ul>
            <ul
              class="py-1 text-gray-500 dark:text-gray-400"
              aria-labelledby="dropdown"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Cerrar Sesión
                </a>
              </li>
            </ul>
          </div>
        </>
  )
});