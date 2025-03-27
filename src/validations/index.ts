import { z } from "zod";

export const signupValidations = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters long." })
      .regex(/^[a-zA-Z0-9_]+$/, {
        message:
          "Username must only contain letters, numbers, and underscores.",
      }),
    name: z.string().regex(/^[A-Za-z]+ \s*[A-Za-z]+$/, {
      message:
        "Name must consist of two names separated by a comma (e.g., John, Doe).",
    }),
    email: z.string().email({ message: "Invalid email address." }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirm Password must be at least 6 characters." }),
    avatar: z
      .instanceof(File, { message: "Avatar must be a valid file." })
      .nullable()
      .optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export const signinValidations = z.object({
  email: z.string().email({ message: "please enter the valid eme" }),

  password: z.string(),
});
