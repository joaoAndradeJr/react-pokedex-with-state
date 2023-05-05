import React from 'react';
import { arrayOf } from 'prop-types';
import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    const { pokemonList } = this.props;
    this.state = {
      index: 0,
      filteredPokemonList: [...pokemonList],
    };
  }

  handleCLick = () => {
    const { index, filteredPokemonList } = this.state;
    if (index === filteredPokemonList.length - 1) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState((previousState) => ({
        index: previousState.index + 1,
      }));
    }
  };

  handleFilter = (type) => {
    const { pokemonList } = this.props;
    const filteredPokemonList = pokemonList
      .filter((pokemon) => pokemon.type === type);
    this.setState({
      index: 0,
      filteredPokemonList,
    });
  };

  render() {
    const { index, filteredPokemonList } = this.state;
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon
            key={ filteredPokemonList[index].id }
            pokemon={ filteredPokemonList[index] }
          />
        </div>
        <button onClick={ () => this.handleFilter('Fire') }>Fire</button>
        <button onClick={ () => this.handleFilter('Psychic') }>Psychic</button>
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
