'use client';
import { useRef } from "react";
import { useRouter } from 'next/navigation'
import axios from "@/lib/axios"

function Form() {

    const titleRef = useRef()
    const descRef = useRef()
    const router = useRouter()

    function handelSubmit(e) {
        e.preventDefault()
        const data = {
            title: titleRef.current.value,
            content: descRef.current.value
        }
        axios.post("/todos", data)
        router.refresh()
    }

    return (<div>
        <form onSubmit={handelSubmit} className=' m-5 row justify-content-center'>
            <input ref={titleRef} name="title" placeholder='Todo Title ' className='col-2 col-lg form-control m-2' required />
            <input ref={descRef} name="content" placeholder='Todo Text' className='col-2 col-lg form-control m-2' required />
            {/* <Link href="/"><button type="submit" className='col-2 col-lg btn btn-primary m-2 mx-lg-5'>Add</button></Link> */}
            <button type="submit" className='col-2 col-lg btn btn-primary m-2 mx-lg-5'>Add</button>

        </form>
    </div>);
}

export default Form;