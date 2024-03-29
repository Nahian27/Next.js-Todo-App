'use client';
import { motion, AnimatePresence, stagger } from "framer-motion"
import { supabase } from "../lib/initSupabase"
import { useRouter } from 'next/navigation'
import { useState } from "react"
import Link from "next/link";


export default function Todo(p: { slug: number, i: number, title: string, text: string }) {

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
            transition={{ ease: "backOut", duration: 0.5, delay: p.i * 0.1, layout: { type: "spring", duration: 1 } }}
            className='card shadow-lg bg-base-200 w-80 sm:h-96 h-60'>
            <div className="card-body">
                <h2 className='card-title'>
                    {p.title}
                </h2>
                <div className='card-body'>
                    {p.text}
                </div>
                <div className='card-actions flex justify-end gap-3'>
                    {/* <button
                    className='btn btn-outline-success '
                >Done
                </button> */}
                    <Link prefetch={true} href={"/" + p.slug} className='btn btn-secondary'>Edit</Link>
                    <button
                        className={`btn btn-accent ${isLoading && "loading loading-bars loading-lg"}`}
                        onClick={deleteHandler}>Delete
                    </button>
                </div>
            </div>
        </motion.div ></AnimatePresence>
    </>

    )
}