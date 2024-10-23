import { component$ } from "@builder.io/qwik";
import { useSession } from "../plugin@auth";

export default component$(() => {
  const session = useSession();

  const user = session.value?.user;
  return (
    <>
      <p>{session.value?.user?.email}</p>
      <p>{session.value?.user?.id}</p>
      <p>{session.value?.user?.name}</p>
    </>
  );
});
