import Image from "next/image";
import { links } from "../const/navbar";
import Link from 'next/link'

export default function HeaderComponent() {




  return (


    <div className="flex xl:gap-4  gap-2 align-around">
      <h1 className="px-4">Blog Template</h1>
      {/* <Image src="/icons/seo-icon--neon-website--cyberpunk-colors.svg" width={30} height={30}/> */}
      {links.map((link) => (
        <nav key={link.nombre} className="">
          <Link href={link.enlace}>
            <div className="xl:py flex  justify-between sm:w-full">

            
            <p className="md:flex  hidden">{link.nombre}</p>
            <Image src={link.img} width={60} height={60}/></div>
          </Link>
        </nav>
      ))}
    </div>

  );
}