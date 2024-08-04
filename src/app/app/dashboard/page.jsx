import Link from "next/link";

export default function Page() {
    return <>
        <h1>Hello, Dashboard Page!</h1>
        <ul>
            <li><Link href="/app/dashboard/settings">Settings</Link></li>
        </ul>
    </>

}