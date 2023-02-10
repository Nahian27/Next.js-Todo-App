'use client';
import { motion, AnimatePresence } from "framer-motion"
import { supabase } from "../lib/initSupabase"
import { useRouter } from 'next/navigation'

export default function Todo(p: { slug: number, title: string, text: string }) {

    const router = useRouter()

    async function deleteHandler() {


        const { data, error } = await supabase
            .from('Todos')
            .delete()
            .eq('id', p.slug)



        router.refresh()
    }

    return (<>
        <AnimatePresence><motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='card shadow-sm p-0 m-2 m-lg-3' style={{ width: '300px', height: '350px' }}>
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

        </motion.div ></AnimatePresence>
    </>

    )
}