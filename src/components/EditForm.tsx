import { supabase } from '@/lib/initSupabase';
import { revalidatePath } from 'next/cache';
import Link from 'next/link'
import { redirect } from 'next/navigation';


async function EditFrom(p: { id: number, title: string, content: string }) {

    async function updateHandler(formData: FormData) {
        "use server";
        const { error } = await supabase
            .from('Todos')
            .update({ title: formData.get("title"), content: formData.get("content") })
            .eq('id', p.id)
        revalidatePath("/")
        redirect("/")

    }

    return (<><div>
        <form action={updateHandler} className='flex flex-col md:flex-row justify-center items-center md:my-10 gap-5 m-2'>
            <input name="title" defaultValue={p.title} placeholder='Todo Title' className='input input-bordered input-primary w-80' required />
            <input name="content" defaultValue={p.content} placeholder='Todo Text' className='input input-bordered input-primary w-80' required />
            <Link
                href={'/'}
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