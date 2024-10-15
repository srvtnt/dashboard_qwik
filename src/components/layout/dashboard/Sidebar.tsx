import { component$ } from "@builder.io/qwik";
import { dataGeneralSidebar } from "~/data/SidebarRoutes";
import { SidebarItem } from "./SidebarItem";
import { LogoCustom } from "~/components/common/LogoCustom";
import { Link } from "@builder.io/qwik-city";
import { SidebarItemList } from "./SidebarItemList";

export default component$(() => {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        class="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
        aria-label="Sidenav"
      >
        <div class="h-full overflow-y-auto border-r border-gray-200 bg-white px-3 py-5 dark:border-gray-700 dark:bg-gray-800">
          <LogoCustom
            title="Caprebicentenario"
            isClickable={true}
            classCustom="mb-5 flex items-center ps-2.5 "
            srcImg="https://flowbite.com/docs/images/logo.svg"
          />

          <ul class="space-y-2">
            {dataGeneralSidebar.map((item) => (
              <li key={item.label}>
                   {item.options ? (
                      <SidebarItemList
                        key={item.label}
                        label={item.label} 
                        icon={<item.icon />} 
                        options={item.optionsList}
                      />
                    ) : (
                      <SidebarItem
                        key={item.label}
                        icon={<item.icon />}
                        label={item.label}
                        href={item.href}
                      />
                    )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
});
