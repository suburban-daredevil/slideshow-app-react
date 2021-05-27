import React from 'react';

import SlideshowImage from './components/SlideshowImage';

import Typography from '@material-ui/core/Typography';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      slideshowimages:{},
      curerntIndex:0,
      currentImage:'https://images.dog.ceo/breeds/labrador/n02099712_1987.jpg',
    }
    this.handleClickDecrement = this.handleClickDecrement.bind(this);
    this.handleClickIncrement = this.handleClickIncrement.bind(this);
    this.handleClickShuffle = this.handleClickShuffle.bind(this);
  }

  componentDidMount(){
    fetch('https://dog.ceo/api/breed/husky/images/random/25')
      .then(response => response.json())
      .then(data => {
        this.setState({
            slideshowimages:data,
        })
      })
  }

  handleClickIncrement(){

    //console.log(this.state.slideshowimages.message[0]);
    this.setState(prevState => {
      if(prevState.currentIndex+1<prevState.slideshowimages.message.length){
        return{
          currentIndex:prevState.currentIndex+1,
        }
      }
      else{
        return{
          currentIndex:0,
        }
      }      
    })

    this.setState(prevState => {
      return{
        currentImage:prevState.slideshowimages.message[prevState.currentIndex]
      }
    })
  }

  handleClickDecrement(){
    this.setState(prevState => {
      if(prevState.currentIndex-1>=0){
        return{
          currentIndex:prevState.currentIndex-1,
        }
      }
      else{
        return{
          currentIndex:this.state.slideshowimages.message.length-1,
        }
      }      
    })

    this.setState(prevState => {
      return{
        currentImage:prevState.slideshowimages.message[prevState.currentIndex]
      }
    })

  }

  handleClickShuffle(){
    const randNum = Math.floor(Math.random()*this.state.slideshowimages.message.length);
    const randUrl = this.state.slideshowimages.message[randNum]
    this.setState({
        currentImage:randUrl,
        currentIndex:randNum,
    })
  }

  render(){

    return(
      <div>
        <Typography
          align='center'
          color='primary'
          variant='h5'
        >
          <h1>The Doggy Slideshow App</h1>
        </Typography>
        <SlideshowImage 
          imageUrl={this.state.currentImage}
          handleClickIncrement={this.handleClickIncrement}
          handleClickDecrement={this.handleClickDecrement}
          handleClickShuffle={this.handleClickShuffle}
        />
      </div>

    )
  }
}

export default App;