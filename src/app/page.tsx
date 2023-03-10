import { supabase } from '../lib/initSupabase'
import Form from "../components/Form";
import Todo from "../components/Todo";
export const revalidate = 0
export const metadata = {
  title: 'Todo App',
};

export default async function App() {

  const { data, error } = await supabase.from('Todos').select('*')

  return (<>
    <h1 className='sm:text-5xl text-3xl py-10 text-center'>Welcome To My Todo App</h1>
    <Form />
    <div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-5 mt-5'>
      {
        data?.map((todo) => {
          const { id, title, content } = todo;
          return <Todo key={id} slug={id} title={title} text={content} />
        })
      }
    </div></>
  )
}