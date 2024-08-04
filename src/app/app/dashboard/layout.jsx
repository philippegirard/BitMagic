'use client'

import {useUserInfo} from "@/app/providers/UserProvider";
import Link from "next/link";
import {useMagic} from "@/app/providers/MagicProvider";
import { useRouter } from 'next/navigation'

export default function Layout({children}) {
    const user = useUserInfo()
    const { magic } = useMagic()
    const router = useRouter()

    const handleLogout = async (e) => {
        e.preventDefault()
        await magic.user.logout()
        router.push("/");
    }

    const showWalletUI = async (e) => {
        e.preventDefault()
        magic.wallet.showUI()
    }

    return (
        <section>
            <div className="header">
                <h1><Link href="/app/dashboard">BitMagic</Link></h1>
                <div className="user-info">
                    <div>Address: <a href="#" onClick={showWalletUI} className="monoFont">{user?.publicAddress}</a></div>
                    <div>Email: <span className="monoFont">{user?.email}</span></div>
                    <a href="#" onClick={handleLogout}>Logout</a>
                </div>
            </div>
            {children}
        </section>
    )
}