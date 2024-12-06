"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {notesSchema} from "@/Utils/formSchema";
import {useState} from "react";
import Notes from "@/components/custom/noteApp/Notes";

const Page = () => {
    const form = useForm<z.infer<typeof notesSchema>>({
        resolver: zodResolver(notesSchema),
        defaultValues: {
            title: "",
            content: "",
        },
    })

    const [notes, setNotes] = useState<z.infer<typeof notesSchema>[]>([])

    function onSubmit(values: z.infer<typeof notesSchema>) {
        setNotes([...notes, values])
    form.reset()
}

    return (
        <div className={'space-x-8 p-20 mx-auto m-10 flex'}><Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8 p-8 bg-black flex flex-col justify-center items-center rounded-lg">
                <div className="flex flex-col space-y-4 w-full">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className={'text-white'}>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter title" {...field} />
                                </FormControl>
                                <FormDescription className={'text-white'}>
                                    This is the title of your note.
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="content"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className={'text-white'}>Content</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter content" {...field} />
                                </FormControl>
                                <FormDescription className={'text-white'}>
                                    This is the content of your note.
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
                <Button className='w-full' type="submit" variant={'destructive'}>Submit</Button>
            </form>
        </Form>

            <Notes notes={notes}/>
        </div>
    );
};

export default Page;