import { supabase } from '@/lib/initSupabase'
import EditFrom from "@/components/EditForm";
export const metadata = {
    title: 'Edit Todo',
};

async function Edit({ params }: { params: { id: number } }) {

    const { data, error } = await supabase
        .from('Todos')
        .select('*')
        .eq('id', params.id)

    const [todo] = data!
    return (
        <>
            <h1 className='sm:text-5xl text-4xl py-10 text-center'>Edit Todo No.{params.id}</h1>
            <EditFrom id={todo.id} title={todo.title} content={todo.content} />
        </>)
}

export default Edit;