 import PropTypes from 'prop-types'
 import '../css/styles.css'

export function Button({text='', name=''}){
    // validamos la condicion del boton
    if(!text){
        // alert('Lo sentimos el boton no contiene texto')
        console.error('Lo sentimos el boton no contiene texto')
    }
    return <button className="btn">{text }-{ name}</button>
}

Button.propTypes = {
    text:PropTypes.string.isRequired
}
Button.defaultProps ={
    name:"Usuario por defecto",
    text:"Texto por defecto"
}