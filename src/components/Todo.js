'use client';
import axios from "@/lib/axios"
import { useRouter } from 'next/navigation'

export default function Todo(p) {

    const router = useRouter()

    function deleteHandler() {
        axios.delete('/todos/' + p.slug)
        router.refresh()
    }

    return (
        <div className='card shadow-sm p-0 m-2 m-lg-3' style={{ width: '300px', height: '350px' }}>
            <h2 className='card-header'>
                {p.title}
            </h2>
            <div className='card-body'>
                {p.text}
            </div>
            <div className='card-footer text-end'>
                <button
                    className='btn btn-outline-success '
                >Done
                </button>
                <button
                    className='btn btn-outline-info mx-2'
                >Edit
                </button>
                <button
                    className='btn btn-outline-secondary'
                    onClick={deleteHandler}>Delete
                </button>

            </div>

        </div >
    )
}