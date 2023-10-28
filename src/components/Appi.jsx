import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';
import Boton from './Boton';

const Appi = () => {

    const [ data, setData ] = useState([]);
    const [ pagina, setPagina ] = useState(1);

    useEffect(()=> {
       getMovies(); 
    }, [pagina])
    //El arreglo de dependencias en useEffect debe contener todas las variables y funciones que son utilizadas dentro del efecto y que pueden cambiar con el tiempo. Esto ayuda a garantizar que el efecto se ejecute correctamente cuando cualquiera de esas dependencias cambia.
    //como getMovies no cambia con el tiempo no es necesario agregarlo, es una advertencia de eslint

    const cambiarPagina = (direccion) => {
    if (direccion === 'anterior' && pagina > 1) {
        setPagina(pagina - 1);
    } else if (direccion === 'siguiente' && pagina < 102) {
        setPagina(pagina + 1);
    }
    }

    //fetch
    // async function  getMovies(){
    //     const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1');

    //     const responseData = await response.json();
    //     setData(responseData.results);
    //     console.log(data);
    // }

    //fetch.then()
    // function  getMovies(){
    //     fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1')
    //     .then((response) => response.json())
    //     .then((responseData) => {setData(responseData.results)})
    //     .catch((error)=>{console.log(error)});
    // }

    //Axios
    // async function getMovies(){
    //     const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1');
    //     setData(response.data.results);
    // }

    //Axios .then
    async function getMovies(){
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=${pagina}`)
        .then((response) => {setData(response.data.results)})
        .catch((error)=>{console.log(error)});  
    }


  return (
    <div style={{width:'100%', display:'flex', justifyContent: 'center', alignContent: 'center', flexDirection:'column'}}>
        <div style={{width:'100%', display:'flex', flexWrap:'wrap', justifyContent: 'center', alignContent: 'center'}}>
            { data.map((item) => (
                <Card key={item.id} image={item.poster_path} title={item.title} description={item.overview}/>
            ))
            }
        </div>
        
        <div style={{margin: '1rem'}}>
            <Boton contenido={'Anterior'} funcion={() => cambiarPagina('anterior')}/>
            <Boton contenido={'Siguiente'} funcion={() => cambiarPagina('siguiente')}/>
        </div>
    </div>
    )
}

export default Appi