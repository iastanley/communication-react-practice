import React from 'react';

import SearchInput from './search-input';
import CharacterList from './character-list';

//make life-search a stateful component
export default class LiveSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  //render
  render() {
    const characters = this.props.characters.filter(character => {
      return character.name.toLowerCase().includes(
        this.state.searchTerm.toLowerCase()
      );
    });
    return (
        <div className="live-search">
            <SearchInput
            onChange={searchTerm => this.setState({searchTerm})}/>
            <CharacterList characters={characters} />
        </div>
    );
  }
}
