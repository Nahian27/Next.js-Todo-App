'use client'
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

    return (<><div className="container">
        <h1 className='p-5 text-center'>Edit a Todo</h1>
        <form onSubmit={updateHandler} className=' m-5 row justify-content-center'>
            <input name="title" placeholder='Todo Title ' className='col-2 col-lg form-control m-2' value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input name="content" placeholder='Todo Text' className='col-2 col-lg form-control m-2' value={content} onChange={(e) => setContent(e.target.value)} required />
            <Link
                href={'/'}
                className='col-2 m-2 col-lg btn btn-secondary mx-lg-2'>
                Back
            </Link>
            <button
                type='submit'
                className='col-2 m-2 col-lg btn btn-primary  mx-lg-2'
            >
                Save Changes
            </button>

        </form>
    </div></>)
}

export default EditFrom;