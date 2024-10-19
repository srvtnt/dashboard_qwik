import { component$, JSX } from "@builder.io/qwik";

interface CustomProps {
  icon: JSX.Element;
  size?: number;
  customCLass?: string; // Permite pasar clases adicionales
}

export const CustomIcon = component$((props: CustomProps) => {
  const { icon, size = 24, customCLass = "" } = props;
  return (
    <div
      class={`flex items-center ${customCLass}`}
      style={{
        fontSize: `${size}px`,
      }}
    >
      {icon}
    </div>
  );
});
