import {useEffect} from "react";
import {useMagic} from "@/app/providers/MagicProvider";
import LoadingDots from "@/app/components/LoadingDots";

export const WaitForMagicProvider = ({ children }) => {
    const { magic } = useMagic()

    useEffect(() => {
        if (!!magic) {
            console.log('Magic is initialized');
        } else {
            console.log('Magic is not initialized');
        }
    }, [magic]);

    if (!magic) {
        return <h1>Initialization<LoadingDots/></h1>
    }

    return <>{children}</>;
};