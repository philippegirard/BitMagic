'use client'

import {MagicProvider} from './MagicProvider';
import {LoginProvider} from "@/app/providers/LoginProvider";
import {UserProvider} from "@/app/providers/UserProvider";
import {MoonPayProvider} from "@/app/providers/MoonPayProvider";

export default function AppProvider({children}) {
    return (
        <MagicProvider>
            <LoginProvider>
                <UserProvider>
                    <MoonPayProvider apiKey={process.env.NEXT_PUBLIC_MOONPAY_API_KEY || ""}
                                     debug>
                        {children}
                    </MoonPayProvider>
                </UserProvider>
            </LoginProvider>
        </MagicProvider>
    )
}