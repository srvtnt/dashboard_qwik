import { component$, JSX } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { CustomIcon } from '~/components/common/LucideIcon';

interface SidebarItemProps {
    label: string;
    icon: JSX.Element;
    options: {
        label: string;
        link: string;
    }[];
    key: string;
  }
  


export const SidebarItemList = component$((props: SidebarItemProps) => {
    const { label, icon, options } = props;
  return (
    <>
        <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
            <CustomIcon color="black" size={20} icon={icon} />
            <span class="flex-1 ml-3 text-left whitespace-nowrap">{label}</span>
            <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <ul id="dropdown-pages" class="hidden py-2 space-y-2">
            {options.map((item) => (
                <li key={item.label}>
                    <Link
                        href={item.link}
                        class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                        <span>{item.label}</span>
                    </Link>
                    
                </li>

            ))}
        </ul>
    </>
  )
});