"use client"

import { CONTACTS_COLLECTION_CONTRACT } from "@/app/const/contracts"
import { ConnectWallet, useAddress, useContract, useContractMetadata, useOwnedNFTs} from "@thirdweb-dev/react"
import { ShowCollectionMetadata } from "./nfts/ShowCollectionMetadata"
import { UseNFTCollectionCard } from "./nfts/UseNFTCollectionCard"

export const ScheduleContactsNFTsSection = () => {
    const address = useAddress()
  const { contract } = useContract(CONTACTS_COLLECTION_CONTRACT)
  const { data: contactsCollectionMetadata } = useContractMetadata(contract)
  const {data: contactsNFTs, isLoading: isLoadingContactsNFTs, error: errorContactsNFTs} = useOwnedNFTs(contract, address)
  console.log(address);
  console.log("contactsNFTs: ", contactsNFTs, "isLoadingContactsNFTs: ", isLoadingContactsNFTs, "errorContactsNFTs: ", errorContactsNFTs);

  return (
    <section className="md:flex md:gap-8">
      <ShowCollectionMetadata metadata={contactsCollectionMetadata} />
      <div>
        {isLoadingContactsNFTs ? <div>Loading...</div> :(address !== undefined ? 
         contactsNFTs.map(
            (nft) => <UseNFTCollectionCard key={nft.metadata.id} nft={nft} contract={CONTACTS_COLLECTION_CONTRACT} />
  
          )
        :<ConnectWallet/>)}</div>
    </section>
  )
}