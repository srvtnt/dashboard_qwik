import { $, component$, useStore } from "@builder.io/qwik";
import { Form, Link } from "@builder.io/qwik-city";
import { useSignIn } from "~/routes/plugin@auth";

export const LoginForm = component$(() => {
  const signIn = useSignIn();

  const formState = useStore({
    email: "",
    password: "",
    errorMessage: "", // Estado para mostrar errores.
  });

  const handleSignIn = $(async () => {
    try {
      const result = await signIn.submit({
        providerId: "credentials",
        options: {
          email: formState.email,
          password: formState.password,
          callbackUrl: "/panel", // Redireccionar al éxito
        },
      });
      if (result.value.failed) {
        console.error("Error de inicio de sesión:", result.value.formErrors);
        console.error("Errores por campo:", result.value.fieldErrors);
        alert("Credenciales inválidas. Por favor, verifica tus datos.");
      } else {
        console.log("Inicio de sesión exitoso");
        // Redirigir o realizar acciones adicionales si es necesario
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <a
            href="#"
            class="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              class="mr-2 h-8 w-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
              width={50}
              height={50}
            />
            Flowbite
          </a>
          <div class="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
            <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                Sign in to your account
              </h1>
              <Form class="space-y-4 md:space-y-6" preventdefault:submit>
                <div>
                  <label
                    for="email"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="example@company.com"
                    required
                    onInput$={(e) => {
                      formState.email = (e.target as HTMLInputElement).value;
                    }}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    required
                    onInput$={(e) => {
                      formState.password = (e.target as HTMLInputElement).value;
                    }}
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        required
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                {formState.errorMessage && (
                  <div class="text-sm text-red-500">
                    {formState.errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  class="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  preventdefault:click
                  onClick$={handleSignIn}
                >
                  Sign in
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
