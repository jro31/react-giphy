import React, { Component } from 'react';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  render() {
    const gifs = [
      { id: "ZYExqbczBV1r6CmS4y" },
      { id: "AYn3pMLCeuhQQ" }
    ];

    return(
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="PgoUr1suK8z5NqL9Ht" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
