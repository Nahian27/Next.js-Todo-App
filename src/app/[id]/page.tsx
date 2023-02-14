import { supabase } from '@/lib/initSupabase'
import EditFrom from "@/components/EditForm";

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