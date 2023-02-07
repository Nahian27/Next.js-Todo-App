import axios from "../lib/axios";
import Form from "../components/Form";
import Todo from "../components/Todo";

export default async function App() {

  let data = await axios.get(`/todos`)

  return (
    <div>
      <h1 className='p-5 text-center'>Welcome To My Todo App</h1>
      <Form />
      <div className='row justify-content-center'>
        {
          data.data.map((todo) => {
            const { id, title, content } = todo;
            return <Todo key={id} slug={id} title={title} text={content} />
          })
        }
      </div>
    </div>
  )
}