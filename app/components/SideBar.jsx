"use client"

import { useState } from 'react'
const SideBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={open?`h-screen absolute top-0 right-0 bg-blue-500 flex flex-col w-24`:"h-screen absolute top-0 right-0 bg-blue-500 flex flex-col w-8"}>
            <button className="relative top-0" onClick={()=>setOpen(!open)}>🔒</button><ul className='pt-12'>
                <li> <span></span><h2 className={!open&&"hidden"}>Hola mundo</h2> </li>
                <li> <span></span><h2 className={!open&&"hidden"}>Hola mundo</h2> </li>
                <li> <span></span><h2 className={!open&&"hidden"}>Hola mundo</h2> </li>
                <li> <span></span><h2 className={!open&&"hidden"}>Hola mundo</h2> </li>
                <li> <span></span><h2 className={!open&&"hidden"}>Hola mundo</h2> </li>
                <li> <span></span><h2 className={!open&&"hidden"}>Hola mundo</h2> </li>
            </ul>
            {/* {open&& } */}
            
        </div>
    )
}

export default SideBar