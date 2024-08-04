const { Magic: MagicBase } = require('magic-sdk');
const { createContext, useContext, useEffect, useMemo, useState } = require('react');
const {getNetworkUrl, getChainId} = require("@/app/lib/networks");

const MagicContext = createContext({
    magic: null,
});

export const useMagic = () => useContext(MagicContext);

export const MagicProvider = ({ children }) => {
    const [magic, setMagic] = useState(null);

    useEffect(() => {
        if (process.env.NEXT_PUBLIC_MAGIC_API_KEY) {
            const magic = new MagicBase(process.env.NEXT_PUBLIC_MAGIC_API_KEY, {
                network: {
                    rpcUrl: getNetworkUrl(),
                    chainId: getChainId(),
                },
            });

            setMagic(magic);
        }
    }, []);

    const value = useMemo(() => {
        return {
            magic,
        };
    }, [magic]);

    return <MagicContext.Provider value={value}>{children}</MagicContext.Provider>;
};