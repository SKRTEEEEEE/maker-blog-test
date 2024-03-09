import { CONTACTS_COLLECTION_CONTRACT } from "@/app/const/contracts"
import { MediaRenderer, Web3Button, useAddress, useContract, useContractWrite } from "@thirdweb-dev/react"

export const UseNFTCollectionCard = ({ nft }) => {
    const address = useAddress()
    const { contract } = useContract(CONTACTS_COLLECTION_CONTRACT)
    const { mutateAsync } = useContractWrite(contract, "burn")

    return (

        <div className="flex xl:items-center justify-between h-18">
            <MediaRenderer src={nft?.metadata.image} alt={nft?.metadata.name} height={60} width={60} />
            <div className="p-2 w-40 xl:w-80">
                <h3>{nft?.metadata.name}</h3>
                <p className="sm:grid hidden">{nft?.metadata.description}</p>
            </div>
            <div className="xl:w-60 w-40">
                <p><strong className="md:inline hidden">{nft?.metadata.attributes[0].trait_type}</strong> {nft?.metadata.attributes[0].value}</p>
                <p><a href={nft?.metadata.attributes[1].value}>{nft?.metadata.attributes[1].trait_type}<strong className="md:inline hidden"> profile link</strong></a></p>
            </div>
            {/* Faltaria poner aqui-> el success, hacer fake de agendar cita mostrando alert
                 , error, spinner cuando isLoading, 
                 y hacer condicional de si el user no tiene nfts ofrecer link a otra pagina */}
            <Web3Button contractAddress={CONTACTS_COLLECTION_CONTRACT}
                action={() => mutateAsync({ args: [address, nft?.metadata.id, 1] })
                }
            ><div className="flex xl:items-center justify-between h-18">
                    <div>
                        <p><strong className="md:inline hidden">You have: </strong>{nft?.supply} uds.</p>
                    </div>
                    <div className="sm:inline hidden px-8">Schedule an appointment</div>
                </div>
            </Web3Button>

        </div>
    )

}