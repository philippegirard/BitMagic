import {useMagic} from "@/app/providers/MagicProvider";
import {useEffect, useRef, useState} from "react";
import LoadingDots from "@/app/components/LoadingDots";

export const LoginProvider = ({children}) => {
    const {magic} = useMagic()

    const [isLogin, setIsLogin] = useState(false);
    const hasCheckedLogin = useRef(false); // Add this line


    useEffect(() => {
        const checkLogin = async () => {
            console.log("Checking login")
            try {
                await magic.user.getInfo();
                setIsLogin(true);
            } catch (e) {
                const accounts = await magic.wallet.connectWithUI();
                console.log("accounts:", accounts)
                setIsLogin(true);
            }
        };

        if (!hasCheckedLogin.current) {
            checkLogin();
            hasCheckedLogin.current = true;
        }
    }, []);

    // Only render children when not loading and user is logged in
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