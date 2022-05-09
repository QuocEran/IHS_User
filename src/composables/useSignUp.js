import { ref } from "vue";
import { projectAuth, projectFirestore } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signup(
  email,
  password,
  fullName,
  phoneNumber,
  address,
  age,
  sex
) {
  isPending.value = true;
  error.value = null;

  try {
    if (
      fullName == null ||
      phoneNumber == null ||
      address == null ||
      age == null ||
      sex == null
    )
      throw new Error("Please enter all required information");
    const response = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!response) throw new Error("Could not create a new user");

    await response.user.updateProfile({
      displayName: fullName,
      phoneNumber: phoneNumber,
    });

    await projectFirestore
      .collection("patients")
      .doc(response.user.uid)
      .set({
        BMI: "",
        address: address,
        age: age,
        blood: "",
        createdDate: (Date.now() / 1000).toString(),
        diagnostic: "",
        name: fullName,
        email: email,
        height: "",
        weight: "",
        phoneNumber: phoneNumber,
        sex: sex,
        status: "",
      });

    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return { error, isPending, signup };
}
