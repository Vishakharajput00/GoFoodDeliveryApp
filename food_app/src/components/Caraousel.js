import { makeStyles } from '@material-ui/core';
import * as React from 'react';



const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    image:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    image:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    image:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    image:
      'https://source.unsplash.com/random/300×300',
  },
];

const useStyles = makeStyles((theme) => ({
    carouselWrapper: {
      position: 'relative',
    },
    image: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
    },
    indicators: {
      position: 'absolute',
      bottom: theme.spacing(2),
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      justifyContent: 'center',
      zIndex: 1,
    },
    caption: {
      position: 'absolute',
      bottom: theme.spacing(2),
      left: 0,
      width: '100%',
      textAlign: 'center',
      zIndex: 1,
    },

    
  }));

const Caraousel = () => {
    const classes = useStyles();
 
  
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false" style={{maxHeight:"650px", objectFit:"contain !important"}}>
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://source.unsplash.com/random/900×700/?burger" class="d-block w-100" style={{maxHeight:"650px"}} alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            <div class="main">
    <span class="fa fa-search form-control-feedback"></span>
    <input type="text" class="form-control" placeholder="Search"/>
  </div>
            </div>
           
          </div>
          <div class="carousel-item">
            <img src="https://source.unsplash.com/random/900×700/?pastery" class="d-block w-100" style={{maxHeight:"650px"}} alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            <div class="main">
    <span class="fa fa-search form-control-feedback"></span>
    <input type="text" class="form-control" placeholder="Search"/>
  </div>
            </div>
          
          </div>
          <div class="carousel-item">
            <img src="https://source.unsplash.com/random/900×700/?barbeque" class="d-block w-100" style={{maxHeight:"650px"}} alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            <div class="main">
    <span class="fa fa-search form-control-feedback"></span>
    <input type="text" class="form-control" placeholder="Search"/>
  </div>
            </div>
        
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
  };

export default Caraousel;
