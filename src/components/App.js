import React from 'react';

// Components
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit = term => {
    console.log(term);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
