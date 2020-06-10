//Importación de modulos y librerias
import React from 'react'
import ReactDom from 'react-dom'
//Crear componente
//const App = () => {
  //  return <div>Hola Mundo</div>
//}
class App  extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <h1> 
                    Hola
                </h1>
                <h2> 
                    Mundo
                </h2>
        </div>
        )
    }
}
//Renderizado de componente
ReactDom.render(
    <App/>,
    document.querySelector('#root')
)