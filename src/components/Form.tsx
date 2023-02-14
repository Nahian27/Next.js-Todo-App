'use client';
import React, { useRef, ChangeEvent, FormEvent } from "react";
import { useRouter } from 'next/navigation'
import { supabase } from "@/lib/initSupabase";

function Form() {

    const titleRef = useRef<HTMLInputElement>(null)
    const descRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    async function handelSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        const todo = {
            title: titleRef.current!.value,
            content: descRef.current!.value
        }

        const { error } = await supabase
            .from('Todos')
            .insert(todo)

        router.refresh()
    }

    return (
        <div>
            <form onSubmit={handelSubmit} className=' m-5 row justify-content-center'>
                <input ref={titleRef} name="title" placeholder='Todo Title ' className='col-2 col-lg form-control m-2' required />
                <input ref={descRef} name="content" placeholder='Todo Text' className='col-2 col-lg form-control m-2' required />
                <button
                    type="submit"
                    className='col-2 col-lg btn btn-primary m-2 mx-lg-5'
                >
                    Add
                </button>

            </form>
        </div>);
}

export default Form;