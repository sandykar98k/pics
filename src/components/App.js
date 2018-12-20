import React from 'react';
import axios from 'axios';

// Components
import SearchBar from './SearchBar';

class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    const response = await axios.get(
      'https://api.unsplash.com//search/photos',
      {
        params: { query: term },
        headers: {
          Authorization:
            'Client-ID 9101a0a0dc79cd0ca896dba9e505c208089faf2e827cbb1353a4cc6102f57b89'
        }
      }
    );

    this.setState({
      images: response.data.results
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} Images
      </div>
    );
  }
}

export default App;
