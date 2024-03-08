import { CONTACTS_COLLECTION_CONTRACT } from "@/app/const/contracts"
import { MediaRenderer, Web3Button } from "@thirdweb-dev/react"
import { ethers } from "ethers"

export const NFTCollectionCard = ({ nft }) => {

    return (
        <div className="flex items-center h-18">
            <MediaRenderer src={nft?.metadata.image} alt={nft?.metadata.name} height={60} width={60} />
            <div className="p-2 w-80">
                <h3>{nft?.metadata.name}</h3>
                <p>{nft?.metadata.description}</p>
            </div>
            <div className="w-60">
                <p><strong>{nft?.metadata.attributes[0].trait_type}</strong> {nft?.metadata.attributes[0].value}</p>
                <p><a href={nft?.metadata.attributes[1].value}><strong>{nft?.metadata.attributes[1].trait_type}</strong> link</a></p>
            </div>

            <Web3Button contractAddress={CONTACTS_COLLECTION_CONTRACT}
                action={
                    (cntr) => cntr.call("mint", [1, nft?.metadata.id,], {
                        value:
                            ethers.utils.parseEther(
                                0.0012.toString()
                            )
                    })}
                onError={(err) => {
                    alert(`error:
                    Pruebe de nuevo y si persiste contacte con nosotros `)
                    console.log("error: ", err)
                }}
                onSuccess={() => {
                    alert("congratus u have your NFT tete")
                    //Hacer el redirect
                }}>Contract</Web3Button>


        </div>
    )

}