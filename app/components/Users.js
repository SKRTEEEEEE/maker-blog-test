"use client"

import { ConnectWallet, Web3Button, useAddress, useContract, useContractRead } from "@thirdweb-dev/react"
import { ADMIN_USERS_CONTRACT } from "../const/contracts";
import { useState } from "react";


export const UsersSection = () => {
    const address = useAddress();
    const { contract } = useContract(ADMIN_USERS_CONTRACT)
    const {data: creator} = useContractRead(contract, "contractCreator")
    const { data: numUsers, isLoading: isLoadingUsers, error: errorNumUsers } = useContractRead(contract, "numUsers")
    const {data: isAdmin, isLoading: isLoadingIsAdmin, error: errorIsAdmin} = useContractRead(contract, "obtenerInfoUsuario", [address]);
    const [newValue, setNewValue] = useState("");
    return (
        <section>
            <div>
                <h2>Users Admin selection section</h2>
                    {errorNumUsers !== null ? errorNumUsers : <p>Num Admin Users: {isLoadingUsers ? "Loading" : numUsers?.toNumber()}</p>}
                    {errorIsAdmin !== null ? errorIsAdmin :  <p>{isLoadingIsAdmin ? "Loading" : (isAdmin === true ? "You're admin" : "You're not still admin")}</p>}

            </div>
            {(address == creator) || isAdmin ?
            <div>
                {/* Limitamos que si no eres el creador el boton de entrar un nuevo usuario no se pueda usar, a fines seria mejor directamente no mostrar esta parte si no eres el creador, pero lo hago asi para que quede como ejemplo de como usar disabled */}
                <h3>Enter a new Admin User: </h3>
                <input disabled={address !== creator} value={newValue} onChange={(e) => setNewValue(e.target.value)} style={{
                marginBottom: '1rem',
                borderRadius: '0.5rem',
                border: '1px solid black',
                padding: '0.5rem',
              }}/>
                <Web3Button contractAddress={ADMIN_USERS_CONTRACT}
                isDisabled={address!==creator}
                action={(contract) => contract.call("asignarRolAdmin", [newValue])}
                onSubmit={() => setNewValue("0")}
                onSuccess={()=>alert("New Admin Saved!")}
                onError={() => alert("Error")}
                >Set new Admin User</Web3Button>

            </div>
                 :
                <></>
            }
            <ConnectWallet />
        </section>
    )
}