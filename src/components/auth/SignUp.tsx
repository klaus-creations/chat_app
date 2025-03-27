"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signupValidations } from "@/validations";
import Link from "next/link";
import {
  useCreateAuthUserMutation,
  useCreateUserMutation,
  useUploadImageMutation,
} from "@/lib/features/api";

export function SignUp() {
  // NOTE: REDUX ENDPOINTS
  const [createUser, { isLoading: isUserLoading }] = useCreateUserMutation();
  const [createAuthUser] = useCreateAuthUserMutation();
  const [uploadImage, {}] = useUploadImageMutation();

  // State for image preview
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const form = useForm<z.infer<typeof signupValidations>>({
    resolver: zodResolver(signupValidations),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
      avatar: null,
    },
  });

  // Handle file change to display preview
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      form.setValue("avatar", file); // Set the file in form state
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file)); // Generate preview
    }
  };

  // Handle form submission
  async function onSubmit(values: z.infer<typeof signupValidations>) {
    const authUser = await createAuthUser({
      email: values.email,
      password: values.password,
    });

    const uploadedAvatarUrl = selectedFile
      ? await uploadImage({ file: selectedFile })
      : null;

    const userPayload = {
      email: values.email,
      blocked: [],
      id: authUser.data?.uid || "",
      name: values.name,
      username: values.username,
      avatar: uploadedAvatarUrl?.data || null,
    };

    await createUser(userPayload);
    form.reset();
    setPreview(null);
    setSelectedFile(null);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4 items-center"
      >
        {/* Full Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm font-bold text-gray-800 dark:text-gray-300">
                Full Name
              </FormLabel>
              <FormControl>
                <Input placeholder="Cristiano Ronaldo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm font-bold text-gray-800 dark:text-gray-300">
                Email Address
              </FormLabel>
              <FormControl>
                <Input type="email" placeholder="cris@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Username */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm font-bold text-gray-800 dark:text-gray-300">
                Username
              </FormLabel>
              <FormControl>
                <Input placeholder="@goat_cristiano" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm font-bold text-gray-800 dark:text-gray-300">
                Password
              </FormLabel>
              <FormControl>
                <Input type="password" placeholder="**********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm font-bold text-gray-800 dark:text-gray-300">
                Confirm Password
              </FormLabel>
              <FormControl>
                <Input type="password" placeholder="**********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Avatar Upload */}
        <div className="w-full flex items-center gap-4">
          <FormField
            control={form.control}
            name="avatar"
            render={() => (
              <FormItem>
                <FormLabel className="text-sm font-bold text-gray-800 dark:text-gray-300">
                  Upload Profile
                </FormLabel>
                <FormControl>
                  <div className="relative w-full">
                    <Input
                      type="file"
                      accept="image/*"
                      className="opacity-0 absolute w-full h-full cursor-pointer "
                      onChange={handleFileChange}
                    />
                    <div className="w-full h-10 flex items-center justify-center border border-gray-300 rounded-md px-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800">
                      {selectedFile ? selectedFile.name : "Choose file"}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {preview && (
            <div className="size-10 lg:size-13 mt-2 rounded-full border overflow-hidden">
              <img
                src={preview}
                alt="Avatar Preview"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="cursor-pointer bg-violet-500 hover:bg-violet-600 text-base font-bold text-gray-200"
          disabled={isUserLoading}
        >
          {isUserLoading ? "Signing Up..." : "Sign Up"}
        </Button>

        {/* Sign In Link */}
        <div className="flex items-center gap-3">
          <p className="text-sm font-bold text-gray-800 dark:text-gray-200">
            I have an account
          </p>
          <Link
            href="/sign-in"
            className="text-xs font-extrabold text-violet-600"
          >
            Sign In
          </Link>
        </div>
      </form>
    </Form>
  );
}
