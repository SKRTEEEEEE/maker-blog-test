import Image from "next/image";
import { links } from "../const/navbar";
import Link from 'next/link'

export default function HeaderComponent() {




  return (


    <div className="flex xl:gap-12 sm:gap-6 gap-2 justify-around">
      <h1 className="px-4">Blog Template</h1>
      {/* <Image src="/icons/seo-icon--neon-website--cyberpunk-colors.svg" width={30} height={30}/> */}
      {links.map((link) => (
        <span key={link.nombre} className="">
          <Link href={link.enlace} className="xl:p-4 xl:w-1/10">

            <span className="sm:flex  hidden">{link.nombre}</span>
            <Image src={link.img} width={50} height={50}/>
          </Link>
        </span>
      ))}
    </div>

  );
}