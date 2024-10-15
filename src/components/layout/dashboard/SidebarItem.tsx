import { component$, JSX } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { CustomIcon } from "~/components/common/LucideIcon";

interface SidebarItemProps {
  label: string;
  icon: JSX.Element;
  href: string;
  key: string;
}

export const SidebarItem = component$((props: SidebarItemProps) => {
  const { label, icon, href } = props;
  return (
    <Link
      href={href}
      class="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    >
      <CustomIcon color="black" size={20} icon={icon} />
      <span class="ml-3">{label}</span>
    </Link>
  );
});
