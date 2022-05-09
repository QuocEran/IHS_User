import { ref } from "vue";
import { projectAuth, projectFirestore } from "@/configs/firebase";
import { useUser } from "@/composables/useUser";

const { user } = useUser().getUser();
const error = ref(null);
const isPending = ref(false);

async function updateProfile(fullName, phoneNumber, address, age) {
  isPending.value = true;
  console.log(fullName, phoneNumber, address, age);
  error.value = null;

  try {
    if (
      fullName == null ||
      phoneNumber == null ||
      address == null ||
      age == null
    )
      throw new Error("Please enter all required information");
    else {
      const resName = await projectAuth.currentUser.updateProfile({
        displayName: fullName,
      });

      if (resName) throw new Error("Cannot update user name");
      else {
        await projectFirestore
          .collection("patients")
          .doc(user.value.uid)
          .update({
            name: fullName,
            address: address,
            age: age,
            phoneNumber: phoneNumber,
          });
      }
    }
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useUpdateProfile() {
  return { error, isPending, updateProfile };
}
