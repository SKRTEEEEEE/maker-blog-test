import { links } from "../const/navbar";
import Link from 'next/link'

export default function HeaderComponent() {


  
  
  return (
    
    
    <div className="flex xl:gap-12 justify-around">
      <h1 className="">Blog Template</h1>
      {links.map((link) => (
        <span key={link.nombre} className="sm:p-4 ">
          <Link href={link.enlace} className="">
            
            <span className="">{link.nombre}</span><span className="">{link.logo}</span>
          </Link>
        </span>
      ))}
    </div>
 
  );
}