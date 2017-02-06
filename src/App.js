import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      wine: { name: 'Some Wine' }
    }

  }

  render() {
    // console.log("1", this.state.wine.name)
    return (
      <div className="card horizontal">
        <div className="card-stacked">
          <div className="card-content">
          <h3>Wine name</h3>
           <br/>
           <p><b>Appellation:</b> Wine appelation name</p>
           <p><b>Region:</b> Wine appelation region</p>
           <p><b>Color:</b> Wine type</p>
           <p><b>Grapes:</b> Wine grape 1, Wine grape 2</p>
          </div>
          <div class="card-action">
          <a class="waves-effect waves-teal btn-flat">
            <span>Like <i className="material-icons left">thumb_up</i> (42)</span>
          </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
