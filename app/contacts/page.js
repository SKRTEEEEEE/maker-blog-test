import Link from "next/link";
import { ClaimContactsNFTsSection } from "../components/main/ClaimContactsNFTsSection";

export default function ContactsPage() {
  return <main className="isolate bg-white">
  <div className="relative px-6 lg:px-8">
    <div className="mx-auto max-w-2xl pt-16">
      <div className="text-left">
        <h1 className="text-l font-bold tracking-tight text-gray-900 sm:text-xl">
          Contract our S3RV1C3s 🤖
        </h1>
        <Link href="/contacts/schedule">
        <p className="xl:mt-2 text-sm leading-8 text-gray-600">
        Schedule your appointment
        </p></Link>
      </div>
    </div>
    
      <ClaimContactsNFTsSection/>
    
  </div>
</main>;
}
