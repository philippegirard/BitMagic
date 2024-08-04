import {useMagic} from "@/app/providers/MagicProvider";
import {useEffect, useState} from "react";
import LoadingDots from "@/app/components/LoadingDots";

export const LoginProvider = ({children}) => {
    const {magic} = useMagic()

    const [isLogin, setIsLogin] = useState(false);


    useEffect(() => {
        const checkLogin = async () => {
            const metadata = await magic.user.getInfo();

            if (!!metadata) {
                console.log("User is logged in", metadata);
                setIsLogin(true);
            } else {
                await magic.wallet.connectWithUI();
                setIsLogin(true);
            }
        };

        checkLogin();
    }, [magic]);


    if (!isLogin) {
        return <>
            <h1>Logging In<LoadingDots/></h1>
        </>
    }


    return (
        <>
            {children}
        </>
    )

}