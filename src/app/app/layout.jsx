'use client';

import AppProvider from "@/app/providers/AppProvider";

export default function Layout({children}) {
    return (
        <AppProvider>
            {children}
        </AppProvider>
    )
}