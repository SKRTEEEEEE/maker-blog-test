"use client"

import { ConnectWallet, useAddress, useContract, useContractRead } from "@thirdweb-dev/react"
import { ADMIN_USERS_CONTRACT } from "../const/contracts";


export const UsersSection = () => {
    const address = useAddress();
    const { contract } = useContract(ADMIN_USERS_CONTRACT)
    const { data: numUsers, isLoading: isLoadingUsers, error: errorNumUsers } = useContractRead(contract, "numUsers")
    const {data: isAdmin, isLoading: isLoadingIsAdmin, error: errorIsAdmin} = useContractRead(contract, "obtenerInfoUsuario", [address]);

    console.log("address: ", address)
    console.log("isAdmin: ", isAdmin)
    console.log("isLoadingAdmin: ", isLoadingIsAdmin, "error: ", errorIsAdmin);
    return (
        <section>
            {(address == "0xb36a9190D654f067B3af11d356e3E9087D2122d2") ?
                <div>
                    <h2>Users Admin selection section</h2>
                    {errorNumUsers !== null ? errorNumUsers : <p>Num Users: {isLoadingUsers ? "Loading" : numUsers?.toNumber()}</p>}
                    {errorIsAdmin !== null ? errorIsAdmin :  <p>{isLoadingIsAdmin ? "Loading" : (isAdmin === true ? "You're admin" : "You're not still admin")}</p>}

                </div> :
                <></>
            }
            <ConnectWallet />
        </section>
    )
}