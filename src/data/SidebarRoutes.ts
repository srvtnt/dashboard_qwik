import { LuPanelBottom, LuBuilding2, LuCalendar } from "@qwikest/icons/lucide";

export const dataGeneralSidebar = [
  {
    icon: LuPanelBottom,
    label: "Dashboard",
    options: false,
    href: "",
    optionsList: [{
      label: "",
      link: ""
    }]
  },
  {
    icon: LuBuilding2,
    label: "Inventario",
    options: true,
    href: "",
    optionsList: [
      {
        label: "Lista Productos",
        link: "/inventario/lista"
      },
      {
        label: "Detalles Productos",
        link: "/inventario/producto/detalles"
      },
    ]
  },
  {
    icon: LuCalendar,
    label: "Calendar",
    options: false,
    href: "",
    optionsList: [{
      label: "",
      link: ""
    }]
  },
];
