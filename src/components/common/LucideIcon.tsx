import { component$, JSX } from "@builder.io/qwik";

interface CustomProps {
  color: string;
  size: number;
  icon: JSX.Element;
}

export const CustomIcon = component$((props: CustomProps) => {
  const { color, size, icon } = props;
  return <div style={{ color: `${color}`, fontSize: `${size}px` }}>{icon}</div>;
});
