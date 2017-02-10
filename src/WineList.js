import React, {Component} from 'react';
import Request from 'superagent'
import Wine from './Wine'
// import bounce from 'react-animations/lib/bounce'
// import { StyleSheet, css } from 'aphrodite';

class WineList extends Component{

  constructor(props){
    super(props);
    this.state = {
      wines: [],
      selectedWine:null,
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
     this.setState({
       selectedWine: oneWine,
 })
   }


  render(){
    const styles = {
      link: {
        color: '#880e4f',
        textDecoration: 'none'
      },
    }
    if(this.state.wines.length === 0) return null
    // console.log("what", this.state.wines);
    const wineList = this.state.wines.map((oneWine, idx) => {
      var activeS = oneWine === this.state.selectedWine ? "#880e4f pink darken-4 white-text" : ""
      // console.log("names", oneWine);
      const className= `collection-item ${activeS}`
      return (

          <a href="#!" className={className} key={idx} onClick={this.clickedWine.bind(this, oneWine)} style={styles.link}>
          {oneWine.name}
          </a>

      )});

      return(
        <div>
          <div className="col s12 m12 l4" >
            <h3 className="center-align">Name</h3>
            <div className="collection z-depth-4">{wineList}</div>
          </div>

            <Wine selectedWine={this.state.selectedWine} />

        </div>


)}}
export default WineList;
