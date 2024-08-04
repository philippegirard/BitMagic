'use client';

import AppProvider from "@/app/providers/AppProvider";

export default function Layout({children}) {
    return (
        <AppProvider>
            <h1>Login Layout</h1>
            {children}
        </AppProvider>
    )
}