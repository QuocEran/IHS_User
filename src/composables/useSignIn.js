import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);
const idToken = ref(null);

async function signin(email, password) {
  isPending.value = true;
  error.value = null;
  idToken.value = null;
  try {
    const response = await projectAuth.signInWithEmailAndPassword(
      email,
      password
    );
    const result = await response.user.getIdToken();
    if (!response) throw new Error("Could not create a new user");
    return { response, result };
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignIn() {
  return { error, isPending, signin };
}
