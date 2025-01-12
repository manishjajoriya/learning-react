import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        let url = `https://open.er-api.com/v6/latest/${currency}`
        fetch(url).then((res) => res.json())
        .then((res) => setData(res["rates"]))
    }, [currency])

    return data
}

export default useCurrencyInfo