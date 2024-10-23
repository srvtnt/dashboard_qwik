import { QwikAuth$ } from "@auth/qwik";
import Credentials from "@auth/qwik/providers/credentials";
import { ZodError } from "zod";
import { signInSchema } from "~/validations/auth/login";

const strapiApiUrl = import.meta.env.STRAPI_API_URL;

export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [
      Credentials({
        credentials: {
          email: { label: "Email" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          try {
            const { email, password } =
              await signInSchema.parseAsync(credentials);

            // Llamada a la API de Strapi para iniciar sesión.
            const response = await fetch(`${strapiApiUrl}/api/auth/local`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ identifier: email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
              const errorMessage = data.error?.message || "Invalid credentials";
              console.error("Authentication failed:", errorMessage);
              throw new Error(errorMessage);
            }
            // Retornar los datos del usuario si la autenticación es exitosa.
            return { id: data.user.id, email: data.user.email, jwt: data.jwt };
          } catch (error) {
            console.error("Error en la autenticación:", error);
            // Puedes lanzar un error con un mensaje más genérico para el frontend
            throw new Error("Unable to authenticate, please try again.");
          }
        },
      }),
    ],
    pages: {
      signIn: "/autenticacion/ingreso",
    },
  }),
);
