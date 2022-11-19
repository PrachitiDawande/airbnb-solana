import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
/* <import> PhantomWalletAdapter</import> */
import {PhantomWalletAdapter} from"@solana/wallet-adapter-wallets";
import { useMemo } from "react";

const WalletConnectionProvider = ({children}) =>{
   const endpoint=useMemo(()=>"https://tiniest-frosty-sanctuary.solana-devnet.discover.quiknode.pro/7311d5e516e4ba91c532c7d84e5b9851fd8b9d2e/" , [])
    //  Endpoint setup

   const wallets = useMemo(()=>[new PhantomWalletAdapter()] , [])
    //  Wallet setup

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
               <WalletModalProvider>
                {children}
               </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}                //IMPORTANT


export default WalletConnectionProvider