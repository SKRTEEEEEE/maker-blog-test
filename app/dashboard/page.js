"use client";

import { useEffect } from "react";
import { initJuno } from "@junobuild/core-peer";
import { AuthWrapper } from "@/app/utils/AuthWrapper";
import { Table } from "@/app/components/Table";
import { Modal } from "@/app/components/Modal";
import { UsersSection } from "../components/Users";

export default function DashboardPage() {
  useEffect(() => {
    (async () =>
      await initJuno({
        satelliteId: "vctpb-cqaaa-aaaal-adwvq-cai",
      }))();
  }, []);





  return (
    <>
      <div className="isolate bg-white">
        <main>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl pt-16">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Web 3 Maker K1T
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Generated by <a
                    href="https://github.com/SKRTEEEEEE"
                    rel="noopener noreferrer"
                    target="_blank"
                 
                  >420QUEEN</a> &<a
                  href="https://github.com/d9o8m7"
                  rel="noopener noreferrer"
                  target="_blank"
                 
                > DAMAKER</a>{" "}
                  
          
                </p>

                <AuthWrapper>
                  <Table />
                  <Modal />

                  
                </AuthWrapper>
                <UsersSection/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
