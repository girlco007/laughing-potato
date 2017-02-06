import React, {Component} from 'react';

class Wine extends Component{

  render(){
    console.log(this.props.selectedWine);
    if(this.props.selectedWine === null) return null
    // console.log(this.props);
    // console.log("heeeyyy",this.props.selectedWine)
    console.log("heeeyyy",this.props.selectedWine.name)
    // console.log("name", this.state.name.selectedWine.name);
    var nam = this.props.selectedWine.name;

    // // console.log("app", this.state.appellation.selectedWine.appellation.name);
    var app = this.props.selectedWine.appellation.name;
    //
    // // console.log("reg", this.state.region.selectedWine.appellation.region);
    var reg = this.props.selectedWine.appellation.region;
    //propsdog
    // // console.log(this.state.color.selectedWine.type);
    var col = this.props.selectedWine.type;
    //

    // console.log(this.props.selectedWine.grapes);
    var grap = this.props.selectedWine.grapes.map((grape, index) => {
      var c = index === 0 ? null : ", "
      console.log("grape", grape);


      return (

          <span key={index}>{c}{grape}</span>

      )})



    return (
      <div className="col s12 m4 l4" >
        <h2 className="center-align">Details</h2>
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <h5 className="center-align">{nam}</h5>
              <p><b>Appellation:</b> {app}</p>
              <p><b>Region:</b> {reg}</p>
              <p><b>Color:</b> {col}</p>
              <div><b>Grapes:</b> {grap}</div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Wine;
