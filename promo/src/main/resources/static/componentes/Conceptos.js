import React from 'react'
import { ComponentePromos } from './ComponentePromos'

export const Conceptos = () => {
  return (
    <div><ComponentePromos />
      <br />
      <br />
      <br />
      <br />
      <form action='#' method='GET'>
        <div id="CargaArchivo" class="button">
          <label for="archivo">Cargar Promociones:</label><br /> <br />
          <input type="file" id="archivo" name="archivo" /> <br />
          <button type="submit">Cargar Archivo</button>
        </div>
      </form>
    </div>
  )
}
