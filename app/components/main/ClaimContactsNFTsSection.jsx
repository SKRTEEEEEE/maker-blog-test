"use client"

import { CONTACTS_COLLECTION_CONTRACT } from "@/app/const/contracts"
import { useContract, useContractMetadata, useNFTs } from "@thirdweb-dev/react"
import { ShowCollectionMetadata } from "./nfts/ShowCollectionMetadata"
import { NFTCollectionCard } from "./nfts/NFTCollectionCard"

export const ClaimContactsNFTsSection = () => {
  // const address = "0xb36a9190D654f067B3af11d356e3E9087D2122d2"
  const { contract } = useContract(CONTACTS_COLLECTION_CONTRACT)
  const { data: contactsCollectionMetadata } = useContractMetadata(contract)
  // const {data: contactsNFTs, isLoading: isLoadingContactsNFTs, error: errorContactsNFTs} = useOwnedNFTs(contract, address)
  const { data: contactsNFTs, isLoading: isLoadingContactsNFTs, error: errorContactsNFTs } = useNFTs(contract)

  // console.log("contactsNFTs: ", contactsNFTs, "isLoadingContactsNFTs: ", isLoadingContactsNFTs, "errorContactsNFTs: ", errorContactsNFTs);
  // console.log("contract: ", contract);


  return (
    <section className="md:flex md:gap-8">
      <ShowCollectionMetadata metadata={contactsCollectionMetadata} />
      <div>{isLoadingContactsNFTs ? <p>Loading...</p> :

        contactsNFTs.map(
          (nft) => <NFTCollectionCard key={nft.metadata.id} nft={nft} />

        )
      }</div>
    </section>
  )
}