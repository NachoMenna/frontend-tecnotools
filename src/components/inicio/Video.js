import React, { Component } from 'react';
import ReactPlayer from 'react-player';


export default class App extends Component {
    render() {

        return (
            <div>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=9_iOGGC70mQ&t=2s&ab_channel=GuhringInc'
                    className='react-player'
                    playing={false}
                    width='680px'
                    height='420px'
                    margin='auto'
                    config={{
                        controls: false,
                        muted: true,
                        volume: 0.4,
                    }}
                />
            </div>
        );
    }
}