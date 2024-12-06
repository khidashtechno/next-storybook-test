"use client"

import { z } from "zod"

export const formSchema = z.object({
    username: z.string()
        .min(2, { message: "Username must be at least 2 characters long" })
        .max(50, { message: "Username must be at most 50 characters long" }),
})

export const notesSchema = z.object({
    title: z.string()
        .min(2, { message: "Title must be at least 2 characters long" })
        .max(50, { message: "Title must be at most 50 characters long" }),
    content: z.string()
        .min(2, { message: "Content must be at least 2 characters long" })
        .max(500, { message: "Content must be at most 500 characters long" }),
})