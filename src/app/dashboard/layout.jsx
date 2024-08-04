import Link from "next/link";

export default function DashboardLayout({children}) {
    return (
        <section>
            <h1><Link href="/dashboard">Dashboard</Link></h1>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav></nav>

            {children}
        </section>
    )
}