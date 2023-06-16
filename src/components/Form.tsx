import { supabase } from "@/lib/initSupabase";
import { revalidatePath } from 'next/cache'
function Form() {

    async function handelSubmit(formData: FormData) {
        "use server";
        const todo = {
            title: formData.get("title"),
            content: formData.get("content")
        }

        const { error } = await supabase
            .from('Todos')
            .insert(todo)
        revalidatePath("/")
    }

    return (
        <div>
            <form action={handelSubmit} className='flex flex-col md:flex-row justify-center items-center md:my-10 gap-5 m-2'>
                <input name="title" placeholder='Todo Title ' className='input input-bordered input-primary w-80' required />
                <input name="content" placeholder='Todo Text' className='input input-bordered input-primary w-80' required />
                <button
                    type="submit"
                    className='btn btn-primary w-28'
                >
                    Add
                </button>
            </form>
        </div>)
}

export default Form;