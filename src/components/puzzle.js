import React, {useState} from 'react';
import Horizontal from './horizontal'

function Puzzle() {



    return (
        <div id='puzzleContainer'>
            <div className = 'row' id='topRow'>
                <Horizontal/>
                <div className = 'box'>

                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
            </div>
            <div className = 'row'>
                <div className = 'box'>

                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
            </div>
            <div className = 'row' id = 'exitRow'>
                <div className = 'box'>
                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
            </div>
            <div className = 'row'>
                <div className = 'box'>

                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
            </div>
            <div className = 'row'>
                <div className = 'box'>

                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
            </div>
            <div className = 'row' id ='bottomRow'>
                <div className = 'box'>

                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
                <div className = 'box'>
                    
                </div>
            </div>
        </div>
    )
}

export default Puzzle