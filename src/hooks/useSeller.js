import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setSellerLoading] = useState(true);
    useEffect(() => {
        if(email){
            fetch(`https://watch-ex-server.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSeller(data.isSeller);
                    setSellerLoading(false);
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]
}

export default useSeller;