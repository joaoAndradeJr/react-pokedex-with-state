import React from 'react';
import { arrayOf } from 'prop-types';
import Pokemon from './Pokemon';
import { pokemonType } from '../types';
import Button from './Button';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    const { pokemonList } = this.props;
    this.state = {
      index: 0,
      filteredPokemonList: [...pokemonList],
      types: [...new Set(pokemonList.map((pokemon) => pokemon.type)), 'All'],
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
    const filteredPokemonList = type === 'All'
      ? [...pokemonList]
      : (
        pokemonList
          .filter((pokemon) => pokemon.type === type)
      );
    this.setState({
      index: 0,
      filteredPokemonList,
    });
  };

  render() {
    const { index, filteredPokemonList, types } = this.state;
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon
            key={ filteredPokemonList[index].id }
            pokemon={ filteredPokemonList[index] }
          />
        </div>
        { types.map((type) => (
          <Button
            key={ type }
            onClick={ () => this.handleFilter(type) }
            innerText={ type }
          />
        ))}
        <Button
          onClick={ this.handleCLick }
          innerText="Próximo pokémon"
          disabled={ filteredPokemonList.length === 1 }
        />
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
