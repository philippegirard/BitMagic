import Link from "next/link";

export default function Layout({children}) {
    /*
    const { magic } = useMagic()
    const [loading, setLoading] = useState(true)


    useEffect(() => {

    }, []);

     */
    // const metadata = await magic?.user.getInfo();
    // const publicAddress = metadata.publicAddress;

    return (
        <section>
            <h1><Link href="/dashboard">Dashboard</Link></h1>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav></nav>
            {children}
        </section>
    )
}