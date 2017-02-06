import React, {Component} from 'react';
import Request from 'superagent'
import Wine from './Wine'


class WineList extends Component{

  constructor(props){
    super(props);
    this.state = {
      wines: [],
      selectedWine:null
    };
  }


  componentWillReceiveProps(newProps){
    console.log(newProps);
    if(newProps.selectedRegion === undefined) return

    var wines=['https://wines-api.herokuapp.com/api/wines?region=',newProps.selectedRegion].join('');
    // console.log('hey1', wines)
    this.setState({
      selectedWine: null
    })
    Request.get(wines).then((response) => {
      // console.log('wines-2', response.body)
      this.setState({
        wines: response.body
      })
    })
  }
   clickedWine(oneWine){
     this.setState({selectedWine: oneWine})
   }


  render(){
    if(this.state.wines.length === 0) return null
    // console.log("what", this.state.wines);
    const wineList = this.state.wines.map((oneWine, idx) => {
      var activeS = oneWine === this.state.selectedWine ? "active" : ""
      // console.log("names", oneWine);
      const className= `collection-item ${activeS}`
      return (

          <a href="#!" className={className} key={idx} onClick={this.clickedWine.bind(this, oneWine)} >
          {oneWine.name}
          </a>

      )});

      return(
        <div>
          <div className="col s12 m4 l4">
            <h2 className="center-align">Wine List</h2>
            <div className="collection">{wineList}</div>
          </div>

            <Wine selectedWine={this.state.selectedWine}/>

        </div>


)}}
export default WineList;
