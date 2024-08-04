'use client'

import {useUserInfo} from "@/app/providers/UserProvider";

export default function Layout({children}) {
    const user = useUserInfo()
    /*
    const { magic } = useMagic()
    const [loading, setLoading] = useState(true)


    useEffect(() => {

    }, []);

     */
    // const metadata = await magic?.user.getInfo();
    // const publicAddress = metadata.publicAddress;

    console.log("layout:", user)

    return (
        <section>
            <div className="header">
                <h1>BitMagic</h1>
                <div className="user-info">
                    <div>Address: <span className="monoFont">{user.publicAddress}</span></div>
                    <div>Email: <span className="monoFont">{user.email}</span></div>
                </div>
            </div>
            {children}
        </section>
    )
}