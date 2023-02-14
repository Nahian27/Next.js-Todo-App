'use client';
import { motion, AnimatePresence } from "framer-motion"
import { supabase } from "../lib/initSupabase"
import { useRouter } from 'next/navigation'
import { useState } from "react"
import Link from "next/link";

export default function Todo(p: { slug: number, title: string, text: string }) {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);

    async function deleteHandler() {
        setIsLoading(true)
        const { error } = await supabase
            .from('Todos')
            .delete()
            .eq('id', p.slug)

        router.refresh()
    }

    return (<>
        <AnimatePresence><motion.div
            layout
            key={p.slug}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1, layout: { duration: 0.5 } }}
            className='card shadow-sm p-0 m-2 m-lg-3' style={{ width: '300px', height: '350px' }}>
            <h2 className='card-header'>
                {p.title}
            </h2>
            <div className='card-body'>
                {p.text}
            </div>
            <div className='card-footer text-end'>
                {/* <button
                    className='btn btn-outline-success '
                >Done
                </button> */}
                <Link href={'/' + p.slug} prefetch={false} className='btn btn-outline-info mx-2'>Edit</Link>
                <button
                    className='btn btn-outline-secondary'
                    onClick={deleteHandler}>{isLoading && <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                    />}Delete
                </button>

            </div>

        </motion.div ></AnimatePresence>
    </>

    )
}