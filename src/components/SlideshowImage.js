import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';


class SlideshowImage extends React.Component{

    constructor(){
        super();
        this.state = {
            tid:''
        }
        this.abortTimer = this.abortTimer.bind(this);        
    }

    abortTimer(){
        clearInterval(this.state.tid);
    }

    render(){

        const imageStyles = {
            padding:'5px',
            objectFit:'fill',
        }

        return(
            <table align='center'>
                <tr>
                    <td>
                        <div style={{padding:'24px'}}>
                            <Card style={{width: '500px',height:'450px'}}>
                                <CardActionArea>
                                    <img style={imageStyles} height='450px' width='500px' src={this.props.imageUrl} alt='Dog photos'></img>
                                </CardActionArea>
                            </Card>
                                <ButtonGroup style={{padding:'5px',position:'fixed'}}>
                                    <Button
                                        variant='contained'
                                        color='secondary'
                                        style={{backgroundColor:'#43A047'}}
                                        onClick={()=>{let temp = setInterval(this.props.handleClickIncrement,2000);
                                                        this.setState({tid:temp});
                                                    }                                                    
                                                }
                                        startIcon={<PlayCircleOutlineIcon></PlayCircleOutlineIcon>}
                                    >Play
                                    </Button>

                                    <Button
                                        variant='contained'
                                        color='secondary'
                                        onClick={this.abortTimer}
                                        style={{backgroundColor:'#F44336'}}
                                        startIcon={<PauseCircleOutlineIcon></PauseCircleOutlineIcon>}
                                    >Pause
                                    </Button>

                                    <Button
                                        variant='contained'
                                        color='secondary'
                                        onClick={this.props.handleClickDecrement}
                                        startIcon={<SkipPreviousIcon></SkipPreviousIcon>}
                                    >Prev
                                    </Button>

                                    <Button
                                        variant='contained'
                                        color='primary'
                                        onClick={this.props.handleClickIncrement}
                                        endIcon={<SkipNextIcon></SkipNextIcon>}
                                    >Next
                                    </Button>
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        style={{backgroundColor:'orange'}}
                                        endIcon={<ShuffleIcon></ShuffleIcon>}
                                        onClick={this.props.handleClickShuffle}
                                    >Random

                                    </Button>
                                </ButtonGroup>

                        </div>
                    </td>
                </tr>
            </table>            
        )
    }

}

export default SlideshowImage