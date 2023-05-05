import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  state = {
    index: 0,
  };

  handleCLick = () => {
    const { pokemonList } = this.props;
    const { index } = this.state;
    if (index === pokemonList.length - 1) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState((previousState) => ({
        index: previousState.index + 1,
      }));
    }
  };

  render() {
    const { pokemonList } = this.props;
    const { index } = this.state;
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon key={ pokemonList[index].id } pokemon={ pokemonList[index] } />
        </div>
        <button onClick={ this.handleCLick }>Próximo pokémon</button>     
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};

export default Pokedex;
