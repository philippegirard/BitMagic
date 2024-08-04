import {useEffect} from "react";
import {useMagic} from "@/app/providers/MagicProvider";

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
        return <h1>Waiting for Magic</h1>
    }

    return <>{children}</>;
};