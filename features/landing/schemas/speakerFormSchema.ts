import { z } from "zod";

export const speakerFormSchema = z.object({
    name: z.string().min(2, "უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს"),

    lastname: z.string().min(2, "უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს"),

    email: z.string().email("ჩაწერეთ სწორი იმეილი"),

    number: z
        .string()
        .min(9, "ჩაწერეთ მინიმუმ 9 სიმბოლო")
        .max(9, "ჩაწერეთ მაქსიმუმ 9 სიმბოლო"),

    text: z.string().min(5, "ჩაწერეთ მინიმუმ 5 სიმბოლო"),
});

export type SpeakerFormValues = z.infer<typeof speakerFormSchema>;
