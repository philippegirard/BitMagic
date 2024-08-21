'use client'

import Link from "next/link";
import {MoonPayBuyWidget} from "@moonpay/moonpay-react";
import {useState} from "react";
import {useUserInfo} from "@/app/providers/UserProvider";

export default function Page() {
    const userInfo = useUserInfo()

    const [showPay, setShowPay] = useState(false)

    const handlePay = async () => {
        setShowPay(true)
    }

    return <>
        <h1>Hello, Dashboard Page!</h1>
        <ul>
            <li><Link href="/app/dashboard/settings">Settings</Link></li>
            <li>
                <a href={"#"} onClick={handlePay}>Pay</a>
            </li>


            <MoonPayBuyWidget
                variant="overlay"
                baseCurrencyCode="usd"
                baseCurrencyAmount="50"
                defaultCurrencyCode="eth"
                walletAddress={userInfo.publicAddress}
                visible={showPay}
                onCloseOverlay={() => setShowPay(false)}
            />
        </ul>
    </>

}