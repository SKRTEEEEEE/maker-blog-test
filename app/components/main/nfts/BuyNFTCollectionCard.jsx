"use client"

// import { CONTACTS_COLLECTION_CONTRACT } from "@/app/const/contracts"
import { MediaRenderer, Web3Button } from "@thirdweb-dev/react"
import { ethers } from "ethers"
import { useState } from "react"
// import Image from "next/image";

export const BuyNFTCollectionCard = ({ nft, contract: CONTACTS_COLLECTION_CONTRACT }) => {
    const [quantity, setQuantity] = useState(1)
    const price = 0.0012;
    const totalPrice = price * quantity;

    return (
        <div className="flex xl:items-center justify-between h-18">
            <MediaRenderer src={nft?.metadata.image} alt={nft?.metadata.name} height={60} width={60} />
            <div className="p-2 w-40 xl:w-80">
                <h3>{nft?.metadata.name}</h3>
                <p className="xl:grid hidden">{nft?.metadata.description}</p>
            </div>
            <div className="md:grid hidden w-60">
                <p><strong className="xl:inline  hidden">{nft?.metadata.attributes[0].trait_type}</strong> {nft?.metadata.attributes[0].value}</p>
                <p><a href={nft?.metadata.attributes[1].value}>{nft?.metadata.attributes[1].trait_type}<strong className="xl:inline hidden"> profile link</strong></a></p>
            </div>

            <span className="md:flex grid">
            <div className="">
                <p className="xl:inline hidden"><i className="">Price: </i><strong>{price}</strong></p>
                <p><i className="md:inline hidden">Total: </i><strong>{totalPrice.toFixed(4)}</strong></p>
            </div>

            <div className="w-10 xl:mx-4 md:inline hidden">
                <div style={{ width: '100%', height: 0, paddingBottom: '139%', position: 'relative' }}>
                    <img src={"./eth/eth.gif"} width="100%"
                        height="100%"
                        style={{ position: 'absolute' }} />

                </div>
            </div>
            <div className="md:grid flex w-20">
                <p>Buy {quantity}</p>
                <p><button onClick={() => { setQuantity(prevCount => prevCount + 1) }}>➕</button><button hidden={quantity===1} onClick={() => {
                    if (quantity > 1) {
                        setQuantity(prevCount => prevCount - 1);
                    }
                }}>➖</button></p>
            </div>
            </span>
            
        <Web3Button  contractAddress={CONTACTS_COLLECTION_CONTRACT}
            action={(cntr) => cntr.call("mint", [quantity, nft?.metadata.id], {
                value: ethers.utils.parseEther(totalPrice.toString())
            })}
            onError={(err) => {
                alert(`error:
                Pruebe de nuevo y si persiste contacte con nosotros `)
                console.log("error: ", err)
            }}
            onSuccess={() => {
                alert("congrats, you have your NFT")
                // Hacer el redirect
            }}>
            Contract
        </Web3Button>

        </div>
    )

}