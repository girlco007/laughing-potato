import React, {Component} from 'react';
import Regions from './Regions';


class WineApp extends Component{

  render(){
    const styles = {
      text: {
        color: '#880e4f',
      }

    }


    return(
      <div className="container">
        <h2 className="center-align" style={styles.text}>Wine</h2>
          <div className="row">
            <Regions />
          </div>
      </div>
    )
  }
}

export default WineApp;
