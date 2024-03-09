// import Link from "next/link";

import { ScheduleContactsNFTsSection } from "@/app/components/main/ScheduleContactsNFTsSection";

export default function ContactsPage() {
  return <main className="isolate bg-white">
  <div className="relative px-6 lg:px-8">
    <div className="mx-auto max-w-2xl pt-16">
      <div className="text-left">
        <h1 className="text-l font-bold tracking-tight text-gray-900 sm:text-xl">
          Schedule our S3RV1C3s 🤖
        </h1>
        <p>Use your NFTs here to schedule a time with your tech expert</p>
      </div>
    </div>
    <ScheduleContactsNFTsSection/>
  </div>
</main>;
}
