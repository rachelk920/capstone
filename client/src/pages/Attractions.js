import React, { Component } from 'react';
 import { Link } from 'react-router-dom';
 import { Route } from 'react-router-dom';
 import { Router } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import {BACKEND_URL} from '../config'
import '../styles/Attractions.css'
import { Db } from 'mongodb';


const Attraction = (props) => {
    return (
        <div className='allAttractions'>
            <div className='attractionsCard'>
                <div className='cardImage'>
                    <img className='attractionImage' src={props.attraction.imageURL} alt='attraction' />
                </div>
                <div>
                    <div className='attractionTitle'>{props.attraction.title}</div>
                    <div className='attractionDescription'>{props.attraction.description}</div>
                    <div className='attractionLocation'>{props.attraction.location}</div>
                    <a className='attractionWeb' href={props.attraction.website} target="_blank" rel="noreferrer">Visit</a>
                </div>
            </div>
        </div>
    )
}

     
export default class Attractions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            attractions:[],
            sports:[],
            casinos:[],
         
            
            loading: true
        };
    }
    componentDidMount() {
        axios.get(BACKEND_URL + 'attractions/')
        // axios.get(BACKEND_URL + 'restaurants/')
       // axios.get(BACKEND_URL + 'breweries/')
    //    axios.get(BACKEND_URL + 'casinos/')
       // axios.get(BACKEND_URL + 'music/')
        // axios.get(BACKEND_URL + 'sports/')
      //  axios.get(BACKEND_URL + 'parks/')
      //  axios.get(BACKEND_URL + 'favorites/')
       // axios.get(BACKEND_URL + 'downtown/')
       // axios.get(BACKEND_URL + 'liberty/')
      //  axios.get(BACKEND_URL + 'newport/')
      //  axios.get(BACKEND_URL + 'otr/')










        .then(response => {
            this.setState({
                attractions: response.data,
                restaurants:response.data,
                casinos:response.data,
                sports:response.data,
                loading: false
            })
            console.log('this is the list of attractions')
        })
        .catch((error) => {
            console.log(error)
        });
    }



    SportsList() {
        return this.state.attractions.map((currentAttraction) => {
           return <Attraction attraction= {currentAttraction} key={currentAttraction._id} />
        })
   }
//     CasinosList() {
//         return this.state.attractions.map((currentAttraction) => {
//             return <Attraction attraction = {currentAttraction} key={currentAttraction._id} />
//         })
//     }
//     Our_FavoritesList() {
//         return this.state.attractions.map((currentAttraction) => {
//             return <Attraction attraction = {currentAttraction} key={currentAttraction._id} />
//         })
//     }
//     Music_VenuesList() {
//         return this.state.attractions.map((currentAttraction) => {
//             return <Attraction attraction = {currentAttraction} key={currentAttraction._id} />
//         })
//     }
//     ParksList() {
//         return this.state.attractions.map((currentAttraction) => {
//             return <Attraction attraction = {currentAttraction} key={currentAttraction._id} />
//         })
//     }
//     MuseumList() {
//         return this.state.attractions.map((currentAttraction) => {
//             return <Attraction attraction = {currentAttraction} key={currentAttraction._id} />
//         })
//     }
//    RestaurantsList() {
//         return this.state.restaurants.map((currentAttraction) => {
//             return <Attraction attraction = {currentAttraction} key={currentAttraction._id} />
//         })
//     }
//     BreweriesList() {
//         return this.state.attractions.map((currentAttraction) => {
//             return <Attraction attraction = {currentAttraction} key={currentAttraction._id} />
//         })
//     }
//     VisitOtrList() {
//         return this.state.attractions.map((currentAttraction) => {
//             return <Attraction attraction = {currentAttraction} key={currentAttraction._id} />
//         })
//     }
//     VisitDowntownList() {
//         return this.state.attractions.map((currentAttraction) => {
//             return <Attraction attraction = {currentAttraction} key={currentAttraction._id} />
//         })
//     }
//     VisitNewportKyList() {
//         return this.state.attractions.map((currentAttraction) => {
//             return <Attraction attraction = {currentAttraction} key={currentAttraction._id} />
//         })
//     }
//     VisitLibertyCenterList() {
//         return this.state.attractions.map((currentAttraction) => {
//             return <Attraction attraction = {currentAttraction} key={currentAttraction._id} />
//         })
//     }
    

    render() {
        return (
        
            this.state.loading === false ? (
                <div className='row'>
                <div className="jumbotron jumbotron-fluid attracthover">
          <div className="attractcontainer">
              <h1>Explore Cincinnati</h1>
          </div>
      </div>
      <div className='attractheader'>
          <h1>The Queen City <span className='crown'><i class="fas fa-crown fa-xs"></i></span> Porkopolis <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The City That Sings <span className='crown'><i class="fas fa-crown fa-xs"></i></span> The 'Nati</h1>
          <h2>WHATEVER NAME YOU KNOW US BY, THERE'S ONLY ONE CINCINNATI</h2>
      </div>
                <div className='SportsContainer' id='Sports'>
                    <h2 className='SportsHeader'>Sports</h2>
                    <div className='SportsInnerContainer'>
                        {this.SportsList()}
                    </div>  </div>
                   
                {/* <div className='CasinosContainer' id='Casinos'>
                    <h2 className='CasinosHeader'>Casinos</h2>
                    <div className='CasinosInnerContainer'>
                        {/* {this.CasinosList()} */}
                    </div>  </div>
                   
                <div className='Our_FavoritesContainer' id='Favorites'>
                    <h2 className='Our_FavoritesHeader'>Our Favorites</h2>
                    <div className='Our_FavoritesInnerContainer'>
                        {this.Our_FavoritesList()}
                    </div>  </div>
                   
                <div className='Music_VenuesContainer' id='Music'>
                    <h2 className='Music_VenuesHeader'>Music Venues</h2>
                    <div className='Music_VenuesInnerContainer'>
                        {this.Music_VenuesList()}
                    </div>  </div>
                    
                <div className='ParksContainer' id='Parks'>
                    <h2 className='ParksHeader'>Parks</h2>
                    <div className='ParksInnerContainer'>
                        {this.ParksList()}
                    </div>  </div>
                   
                <div className='MuseumsContainer' id='Museums'>
                    <h2 className='MuseumHeader'>Museums</h2>
                    <div className='MuseumInnerContainer'>
                        {this.MuseumList()}
                    </div>  </div>

                    <div className='RestaurantsContainer' >
                    <h2 className='RestaurantsHeader' id='Restaurants'>Restaurants</h2>
                    <div className='RestaurantsInnerContainer'>
                        {this.RestaurantsList()}
                    </div>  </div>

                    <div className='BreweriesContainer' id='Breweries'>
                    <h2 className='BreweriesHeader'>Breweries</h2>
                    <div className='BreweriesInnerContainer'>
                        {this.BreweriesList()}
                    </div>  </div>
                    <div className='OTRContainer' id='OTR'>
                    <h2 className='VisitOtrHeader'>Visit OTR</h2>
                    <div className='VisitOtrInnerContainer'>
                        {this.VisitOtrList()}
                    </div>  </div>
                   
                    <div className='DowntownContainer' id='Downtown'>
                    <h2 className='VisitDowntownHeader'>Visit Downtown</h2>
                    <div className='VisitDowntownInnerContainer'>
                        {this.VisitDowntownList()}
                    </div>  </div>

                    <div className='NewportContainer' id='Newport'>
                    <h2 className='VisitNewportKyHeader'>Visit Newport</h2>
                    <div className='VisitNewportKyInnerContainer'>
                        {this.VisitNewportKyList()}
                    </div>  </div>
             
                    <div className='LibertyContainer' id='Liberty'>
                    <h2 className='VisitLibertyCenterHeader'>Visit Liberty Center </h2>
                    <div className='VisitLibertyCenterInnerContainer'>
                        {this.VisitLibertyCenterList()}
                    </div>  </div> */}
               
                    </div>
            ) : (
                <div>
                    <h1 className="loading-spinner">Loading...</h1>
                </div>
            )
        )
    }
}
