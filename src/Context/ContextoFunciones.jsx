import { createContext, useState, useEffect } from 'react';

export const Contexto_Funciones = createContext();

export function Contexto_DataProvider(props) {

  function Saludar() {
    alert('Hola');
  }

  return <Contexto_Funciones.Provider value={{Saludar}}>
    {props.children}
  </Contexto_Funciones.Provider>;
}
