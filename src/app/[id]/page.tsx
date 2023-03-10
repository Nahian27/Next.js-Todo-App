import { supabase } from '@/lib/initSupabase'
import EditFrom from "@/components/EditForm";
export const revalidate = 0
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
            <EditFrom id={todo.id} title={todo.title} content={todo.content} />
        </>)
}

export default Edit;