import { supabase } from '../lib/initSupabase'
import Form from "../components/Form";
import Todo from "../components/Todo";


export default async function App() {


  const { data, error } = await supabase.from('Todos').select('*')


  return (<>
    <h1 className='p-5 text-center'>Welcome To My Todo App</h1>
    <Form />
    <div className='row justify-content-center'>
      {
        data?.map((todo: { id: number; title: string; content: string; }) => {
          const { id, title, content } = todo;
          return <Todo key={id} slug={id} title={title} text={content} />
        })
      }
    </div></>
  )
}