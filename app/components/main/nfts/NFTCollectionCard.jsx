import { CONTACTS_COLLECTION_CONTRACT } from "@/app/const/contracts"
import { MediaRenderer, Web3Button,  useContract, useContractWrite } from "@thirdweb-dev/react"

export const NFTCollectionCard = ( {nft} ) =>{
    // console.log(nft.metadata)
    const {contract} = useContract(CONTACTS_COLLECTION_CONTRACT)
    const {mutateAsync: buyToken, isLoading: isLoadingBuyToken, error: errorBuyToken} = useContractWrite(contract, "freeMintTo")
    console.log("buyToken: ",buyToken, "errorBuyToken: ", errorBuyToken);
    return(
        <div className="flex">
            <MediaRenderer src={nft?.metadata.image} alt={nft?.metadata.name} height={60} width={60}/>
            <div>
                <h3>{nft?.metadata.name}</h3>
                <p>{nft?.metadata.description}</p>
            </div>
            <div>
                <p><strong>{nft?.metadata.attributes[0].trait_type}</strong> {nft?.metadata.attributes[0].value}</p>
                <p><a href={nft?.metadata.attributes[1].value}><strong>{nft?.metadata.attributes[1].trait_type}</strong> link</a></p>
            </div>
            {isLoadingBuyToken ? <p>Loading...</p>: <Web3Button contractAddress={CONTACTS_COLLECTION_CONTRACT} action={()=>buyToken({value: 0.0012 ,args: [1,nft?.metadata.id, "0xb36a9190D654f067B3af11d356e3E9087D2122d2"]})}>Contract</Web3Button>}
            
        </div>
    )

}