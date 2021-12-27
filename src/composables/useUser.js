import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged(function (_user) {
  if (_user) user.value = _user;
});

async function getIdToken() {
  const idtoken = await user.value.getIdToken();
  return idtoken;
}

const userProfile = ref({});
const pathAva = ref("");

function getUser() {
  return { user, userProfile, pathAva };
}

export function useUser() {
  return { getUser, getIdToken };
}
