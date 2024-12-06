import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


interface Props {
    notes: { title: string, content: string }[]
}

const Notes = ({notes}: Props) => {
    return (
        <Card className={'flex-1'}>
            <CardHeader>
                <CardTitle>Notes</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-1'>
                {notes.length === 0 ? <p>No notes</p> :
                    notes.map((note, index) => (
                        <div key={index} className='p-4 rounded-2xl gap-1 bg-gray-100'>
                            <p className='text-l font-bold'>{note.title}</p>
                            <p className='text-l'>{note.content}</p>
                        </div>
                    ))
                }
            </CardContent>
        </Card>

    );
};

export default Notes;