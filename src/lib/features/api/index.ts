// TODO: IMPORT REDUX FUNCTIONS
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { QueryReturnValue } from "@reduxjs/toolkit/query";

// TODO: IMPORT FIREBASE FUNCTIONS
// NOTE: definition for each
import { auth, db, storage } from "@/lib/firebase";

// NOTE: for authentications
import { createUserWithEmailAndPassword } from "firebase/auth";

// NOTE: for database
import { doc, setDoc } from "firebase/firestore";

// NOTE: for storage
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

interface UserCredentials {
  email: string;
  password: string;
}

interface DatabaseUser {
  email: string;
  name: string;
  id: string;
  blocked: string[];
  username: string;
  avatar: string | null;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    // ***************************************************************************************
    createAuthUser: builder.mutation<
      { uid: string; email: string | null; displayName: string | null },
      UserCredentials
    >({
      async queryFn({ email, password }) {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

          const userData = {
            uid: userCredential.user.uid,
            email: userCredential.user.email,
            displayName: userCredential.user.displayName,
          };

          return { data: userData };
        } catch (error) {
          return {
            error: {
              status: "CUSTOM_ERROR",
              message: (error as Error).message,
            },
          } as QueryReturnValue<
            never,
            { status: string; message: string },
            never
          >;
        }
      },
    }),

    // ************************************************************************************
    createUser: builder.mutation<DatabaseUser, DatabaseUser>({
      async queryFn({ email, name, blocked, id, username, avatar = null }) {
        try {
          await setDoc(doc(db, "users", id), {
            name,
            username,
            email,
            id,
            blocked,
            avatar,
          });

          return { data: { email, name, id, blocked, username, avatar } };
        } catch (error) {
          return {
            error: {
              status: "CUSTOM_ERROR",
              message: (error as Error).message,
            },
          };
        }
      },
    }),

    // ************************************************************************************
    uploadImage: builder.mutation({
      async queryFn({ file }) {
        try {
          const num = new Date().getTime() + Math.floor(Math.random() * 10000);
          const storageRef = ref(storage, `images/${num}_${file.name}`);

          const uploadTask = uploadBytesResumable(storageRef, file);

          return new Promise((resolve) => {
            uploadTask.on(
              "state_changed",
              (snapshot) => {
                const progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Upload is ${progress}% done`);
              },
              (error) => {
                resolve({ error: `Something went wrong: ${error.code}` });
              },
              async () => {
                const downloadURL = await getDownloadURL(
                  uploadTask.snapshot.ref
                );
                resolve({ data: downloadURL });
              }
            );
          });
        } catch (error) {
          return { error: "Unexpected error occurred while uploading." };
        }
      },
    }),
  }),
});

// Export Hooks
export const {
  useCreateAuthUserMutation,
  useCreateUserMutation,
  useUploadImageMutation,
} = apiSlice;
