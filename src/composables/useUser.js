// import { ref } from "vue";
// import {
//   projectAuth,
//   projectFirestore,
//   projectStorage,
// } from "@/configs/firebase";

// const user = ref(projectAuth.currentUser);

// projectAuth.onAuthStateChanged(function (_user) {
//   if (_user) user.value = _user;
// });

// async function getIdToken() {
//   const idtoken = await user.value.getIdToken();
//   return idtoken;
// }

// const db = projectFirestore;
// const userProfile = ref({});
// const pathAva = ref("");

// const storage = projectStorage;
// var storageRef = storage.ref();

// projectAuth.onAuthStateChanged(function (_user) {
//   if (_user)
//     db.collection("users")
//       .doc(user.value.uid)
//       .get()
//       .then((doc) => {
//         userProfile.value = doc.data();
//         console.log(userProfile.value);
//         return doc.data();
//       })
//       .then((data) => {
//         console.log(data.avaName);
//         storageRef
//           .child(`${user.value.uid}/${data.avaName}`)
//           .getDownloadURL()
//           .then((url) => {
//             console.log(url);
//             pathAva.value = url;
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       });
// });
// function getUser() {
//   return { user, userProfile, pathAva };
// }

// export function useUser() {
//   return { getUser, getIdToken };
// }
