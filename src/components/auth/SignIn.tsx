"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signinValidations } from "@/validations";
import Link from "next/link";

export function SignIn() {
  const form = useForm<z.infer<typeof signinValidations>>({
    resolver: zodResolver(signinValidations),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof signinValidations>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  // ...

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 items-center w-full"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm lg:text-base font-bold tracking-[1px] text-gray-800 dark:text-gray-300">
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="cris@gmail.com"
                  className="w-full h-10 border-violet-500/[.8] text-sm lg:text-base tracking-[1px] focus:shadow-violet-500 text-gray-800 dark:text-gray-300"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm lg:text-base font-bold tracking-[1px] text-gray-800 dark:text-gray-300">
                Password
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="**********"
                  className="w-full h-10 border-violet-500/[.8] text-sm lg:text-base tracking-[1px] focus:shadow-violet-500 text-gray-800 dark:text-gray-300"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-violet-500 hover:bg-violet-600 cursor-pointer text-base lg:text-xl font-bold tracking-[1px]  text-gray-200"
        >
          Sign In
        </Button>

        <div className="flex itens-center gap-3">
          <p className="text-sm lg:text-base font-bold tracking-[1px] text-gray-800 dark:text-gray-200">
            Don&pos;t have an account ?
          </p>

          <Link
            href={"/sign-up"}
            className="text-xs lg:text-base font-extrabold tracking-[1px] text-violet-600"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </Form>
  );
}
