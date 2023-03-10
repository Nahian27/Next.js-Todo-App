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
            <form className='flex flex-col md:flex-row justify-center items-center md:my-10 gap-5 m-2' onSubmit={handelSubmit}>
                <input ref={titleRef} name="title" placeholder='Todo Title ' className='input input-bordered input-primary w-80' required />
                <input ref={descRef} name="content" placeholder='Todo Text' className='input input-bordered input-primary w-80' required />
                <button
                    type="submit"
                    className='btn btn-primary w-28'
                >
                    Add
                </button>

            </form>
        </div>)
}

export default Form;