import React, {Component} from 'react';
import Regions from './Regions';


class WineApp extends Component{

  render(){
    return(
      <div className="container">
        <h1 className="center-align">Wine</h1>
          <div className="row">
            <Regions className="row" />
          </div>
      </div>
    )
  }
}

export default WineApp;
