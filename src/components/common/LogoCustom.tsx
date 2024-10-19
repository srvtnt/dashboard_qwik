import { $, component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

interface LogoType {
  title: string;
  isClickable: boolean;
  srcImg: string;
}

export const LogoCustom = component$(
  (props: LogoType & { classCustom?: string }) => {
    const { title, isClickable, classCustom, srcImg } = props;
    const navigate = useNavigate(); // Obtén la función de navegación

    const handleClick = $(() => {
      // Envuelve la función en $
      if (isClickable) {
        navigate("/"); // Navega a la ruta deseada
      }
    });

    return (
      <div
        class={`flex  items-center ${
          isClickable ? "cursor-pointer" : ""
        } ${classCustom || ""}`} // Aplicamos clases personalizadas
        onClick$={handleClick} // Usa onClick$ para manejar eventos en Qwik
      >
        <img
          src={srcImg}
          alt="logo"
          width={40}
          height={40}
          class=" h-6 sm:h-7"
        />
        <h1 class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          {title}
        </h1>
      </div>
    );
  },
);
