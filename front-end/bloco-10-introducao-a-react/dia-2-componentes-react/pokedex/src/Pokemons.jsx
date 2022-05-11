import  React from 'react';
import PropTypes from 'prop-types';

class Pokemons extends React.Component {
    render() {
        const {name,type, averageWeight,image}= this.props.pokes;
        return <>
            <div className="box">
            <p>{`Name: ${name}`}</p>
            <p>{`Type: ${type}`}</p>
            <p>{`Avareage Weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
            </div>
            <div className="imagem">
            <img className='spirit' src={image} alt={name}></img>
            </div>
        </>
    }
}

Pokemons.propTypes = {
    pokes: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            measurementUnit: PropTypes.string,
            value: PropTypes.number,
        }),
        image: PropTypes.string,
    }).isRequired
}



export default Pokemons