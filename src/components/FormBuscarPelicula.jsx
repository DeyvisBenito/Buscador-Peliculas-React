import { useState } from "react"
import { useFetch } from "../hooks/useFetch"


export const FormBuscarPelicula = () => {

    const urlBase = 'https://api.themoviedb.org/3/search/movie?api_key='
    const API_KEY = 'b65a6b0a66793de6b2386c833bf1a3ee'

    const [buscarPelicula, setBuscarPelicula] = useState('')
    const [url, setUrl] = useState('')

    const handleChangeInput = (e) => {
        setBuscarPelicula(e.target.value)
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        setUrl(`${urlBase}${API_KEY}&query=${buscarPelicula}`)
    }

    const {data} = useFetch(url)
  return (
    <>
        <form onSubmit={onSubmitForm}>
            <input type="text" placeholder="Buscar pelicula" value={buscarPelicula} onChange={handleChangeInput}/>
            <button type="submit">Buscar</button>
        </form>

        {data && (
            <div className="movie-list">
                {data.results.map(pelicula =>{
                    return (
                    <div className="movie-card" key={pelicula.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} />
                        <h2>{pelicula.title}</h2>
                        <p>{pelicula.overview}</p>
                    </div>
                    )
                })}
            </div>
        )}
    </>
  )
}
