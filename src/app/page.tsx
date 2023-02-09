import axios from "../lib/axios";
import Form from "../components/Form";
import Todo from "../components/Todo";

export default async function App() {

  let res = await axios.get(`/todos`)

  return (<>
    <h1 className='p-5 text-center'>Welcome To My Todo App</h1>
    <Form />
    <div className='row justify-content-center'>
      {
        res.data.map((todo: { id: number; title: string; content: string; }) => {
          const { id, title, content } = todo;
          return <Todo key={id} slug={id} title={title} text={content} />
        })
      }
    </div></>
  )
}