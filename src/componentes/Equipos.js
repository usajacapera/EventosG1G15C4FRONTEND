import React from "react";
import Select from "react-select";
import axios from "axios";
import {useState} from 'react';

const listaEquipos = [
  { label: "Selección de Futbol Argentina", value: 5},
  { label: "Selección de Futbol Brazil", value: 10},
  { label: "Selección de Futbol Francia", value: 6},
]




export const Equipos = () => {

  const handleSelectChange = (evento) => {
    console.log(evento);
  }
  return (

    <Select
      options = { listaEquipos }
      onChange =  { handleSelectChange }
    />
  );
};
