'use client';
import { supabase } from '@/lib/initSupabase';
import Link from 'next/link'
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation'

function EditFrom(p: { id: number, title: string, content: string }) {

    const [title, setTitle] = useState(p.title)
    const [content, setContent] = useState(p.content)
    const router = useRouter()

    async function updateHandler(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        const { error } = await supabase
            .from('Todos')
            .update({ title: title, content: content })
            .eq('id', p.id)
        router.push('/')
    }

    return (<><div>
        <h1 className='sm:text-5xl text-3xl py-10 text-center'>Edit a Todo</h1>
        <form onSubmit={updateHandler} className='flex flex-col md:flex-row justify-center items-center md:my-10 gap-5 m-2'>
            <input name="title" placeholder='Todo Title ' className='input input-bordered input-primary w-80' value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input name="content" placeholder='Todo Text' className='input input-bordered input-primary w-80' value={content} onChange={(e) => setContent(e.target.value)} required />
            <Link
                href={'/'}
                prefetch={false}
                className='btn btn-secondary'>
                Back
            </Link>
            <button
                type='submit'
                className='btn btn-primary'
            >
                Save Changes
            </button>

        </form>
    </div></>)
}

export default EditFrom;