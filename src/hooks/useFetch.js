import { useEffect, useState } from "react"

export const useFetch = (url) => {
  
    const [resultado, setResultado] = useState({
        data: null
    })
    const {data} = resultado

    const getData = async () =>{
        try{
            const response = await fetch(url)
            const data = await response.json()
            setResultado({data})
        }catch(error){
            console.error(error)
        }
    }

    useEffect(() => {
       if(!url) return
        getData()
      }
    , [url])
    

    return {
        data
    }

}
