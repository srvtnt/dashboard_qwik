import { component$, Slot } from "@builder.io/qwik";
import Navbar from "~/components/layout/dashboard/Navbar";
import Sidebar from "~/components/layout/dashboard/Sidebar";

export default component$(() => {
  return (
    <div class="flex h-full w-full">
      <div class="hidden h-full w-64 xl:fixed xl:block">
        <Sidebar />
      </div>
      <div class="w-full xl:ml-64">
        <Navbar />
        <div class="bg-gray-50 p-6 dark:bg-gray-900 ">
          <h2>hola</h2>
          <Slot />;
        </div>
      </div>
    </div>
  );
});
