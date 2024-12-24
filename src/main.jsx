import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BuscadorPeliculasApp } from './BuscadorPeliculasApp'
import './styles/peliculas.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BuscadorPeliculasApp />
  </StrictMode>,
)
