import { supabase } from '../lib/initSupabase'
import Form from "../components/Form";
import Todo from "../components/Todo";
import { cookies } from 'next/headers'
export const metadata = {
  title: 'Todo App',
};

export default async function App() {

  const { data } = await supabase.from('Todos').select('*')
  const cookieStore = cookies().get('darkMode')

  return (<>
    <h1 className='sm:text-5xl text-3xl py-10 text-center'>Welcome To My Todo App</h1>
    <h1 className='sm:text-2xl text-3xl py-10 text-center'>Dark Mode: {cookieStore?.value}</h1>
    <Form />
    <div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-5 mt-5'>
      {
        data?.sort().map((todo, i) => {
          const { id, title, content } = todo;
          return <Todo key={id} slug={id} i={i} title={title} text={content} />
        })
      }
    </div></>
  )
}