import React, {Component} from 'react';
import Request from 'superagent'
import './css/regions.css'
import WineList from './WineList';


class Regions extends Component{

  constructor(props){
    super(props);
    this.state = {
      regions: [],

    };
  }

  componentWillMount(){

    var url='https://wines-api.herokuapp.com/api/regions';
      // console.log('hey', url) gives me url
    Request.get(url).then((response) => {
      // console.log('2', response.body)
      this.setState({
        regions: response.body
      })
    })
  }

  clickedRegion(event){
    this.setState({
      selectedRegion: event.currentTarget.dataset.region
    })

  // console.log('The link was clicked.', event.currentTarget.dataset.region);
}



  render(){

    const styles = {
      link: {
        color: '#880e4f',
        textDecoration: 'none',
        heigh: 500
      },
      btn: {
        textAlign: "left"
      },
    }
    // if(this.state === null) return null

    const regionsList = this.state.regions.map((region, idx) => {
      var activeS = region === this.state.selectedRegion ? "#880e4f pink darken-4 white-text" : ""
      // console.log("region", region, idx, this.state.selectedRegion);
      // console.log("index", idx);
      // console.log("selected", this.state.selectedRegion);
      const className=`collection-item ${activeS}`
      return (
          <a href="#!" className={className} key={idx} onClick={this.clickedRegion.bind(this)} data-region={region} style={styles.link} >
          {region}
          </a>
      )
    });


    return (
      <div>
        <div className="col s12 m12 l4" >
          <h3 className="center-align">Regions</h3>
          <div className="collection z-depth-4">{regionsList}</div>
        </div>
        <div >
          <WineList selectedRegion={this.state.selectedRegion}/>
        </div>
      </div>
    )
}}

export default Regions;
