import { component$ } from "@builder.io/qwik";
import { BottomApp } from "~/components/ui/BottomApp";
import { BottomNotification } from "~/components/ui/BottomNotification";
import { BottomProfile } from "~/components/ui/BottomProfile";
import { BottomSearch } from "~/components/ui/BottomSearch";
import { ThemeDarkBottom } from "~/components/ui/ThemeDarkBottom";

export default component$(() => {
  return (
    <nav class="border-b border-gray-200 bg-white px-4 py-2.5 dark:border-gray-700 dark:bg-gray-800 lg:px-6">
      <div class="flex flex-wrap items-center justify-between">
        <div class="flex items-center justify-start">
          <button
            aria-expanded="true"
            aria-controls="sidebar"
            class="mr-2 cursor-pointer rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden"
          >
            <svg
              class="h-[18px] w-[18px]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            <span class="sr-only">Toggle sidebar</span>
          </button>
          <a href="/" class="mr-4 flex lg:hidden">
            <img
              src="https://flowbite.s3.amazonaws.com/logo.svg"
              class="mr-3 h-8"
              alt="FlowBite Logo"
              height={300}
              width={300}
            />
          </a>
        </div>
        <div class="flex items-center lg:order-2">
          <ThemeDarkBottom />
          <BottomNotification />
          <BottomProfile />
        </div>
      </div>
    </nav>
  );
});
