import React from 'react';

console.log(window.innerWidth)

function clickXBlock(e) {
    var x = e.clientX
    var positionI = parseInt(e.target.style.left.slice(0,-2));
    console.log(positionI, 'here')
    document.onmousemove = dragBlock
    document.onmouseup = closeDragElement
    document.onmouseout = closeDragElement

    function dragBlock(e) {
        e = e || window.event 
        var xChange = e.clientX - x;
        // if(parseInt(e.target.style.left.slice(0, -2)) >= (window.innerWidth/2-147)) {
        e.target.style.left = parseInt(positionI + xChange).toString().concat('px')
        // }
    }
    // console.log(parseInt(e.target.style.left.slice(0, -2.)), 'here')

    function closeDragElement(e) {
        // stop moving when mouse button is released:
        e = e || window.event
        var end = parseInt(e.target.style.left.slice(0,-2))

        if( end <= (window.innerWidth/2-125) ) {
            e.target.style.left = ((window.innerWidth/2-150)).toString().concat('px')
        } else if (end > (window.innerWidth/2-125) && end <= (window.innerWidth/2-75)) {
            e.target.style.left = (window.innerWidth/2-99).toString().concat('px')
        } else if (end > (window.innerWidth/2-75) && end <= (window.innerWidth/2-25)) {
            e.target.style.left = (window.innerWidth/2-50).toString().concat('px')
        } else if (end > (window.innerWidth/2-25) && end <= (window.innerWidth/2+25)) {
            e.target.style.left = (window.innerWidth/2).toString().concat('px')
        } else if (end > (window.innerWidth/2+25)) {
            e.target.style.left = (window.innerWidth/2 +50 ).toString().concat('px')
        }

        document.onmouseup = null;
        document.onmousemove = null;
      }
}

function clickYBlock(e) {
    var x = e.clientY
    var positionI = parseInt(e.target.style.top.slice(0,-2));
    console.log(positionI, 'here')
    document.onmousemove = dragBlock
    document.onmouseup = closeDragElement

    function dragBlock(e) {
        e = e || window.event 
        var xChange = e.clientY - x;
        // if(parseInt(e.target.style.left.slice(0, -2)) >= (window.innerWidth/2-147)) {
        e.target.style.top = parseInt(positionI + xChange).toString().concat('px')
        // }
    }
    // console.log(parseInt(e.target.style.left.slice(0, -2.)), 'here')

    function closeDragElement() {
        e = e || window.event
        var end = parseInt(e.target.style.top.slice(0,-2))

        if( end <= (window.innerHeight/2-125) ) {
            e.target.style.top = ((window.innerHeight/2-152)).toString().concat('px')
        } else if (end > (window.innerHeight/2-125) && end <= (window.innerHeight/2-75)) {
            e.target.style.top = (window.innerHeight/2-101).toString().concat('px')
        } else if (end > (window.innerHeight/2-75) && end <= (window.innerHeight/2-25)) {
            e.target.style.top = (window.innerHeight/2-50).toString().concat('px')
        } else if (end > (window.innerHeight/2-25) && end <= (window.innerHeight/2+25)) {
            e.target.style.top = (window.innerHeight/2-1).toString().concat('px')
        } else if (end > (window.innerHeight/2+25)) {
            e.target.style.top = (window.innerHeight/2 + 50 ).toString().concat('px')
        }
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
}


function Horizontal() {
    return (
        <div>
            <div id='redBlock' style={{
                top: `${(window.innerHeight/2)-50}px`,
                left: `${(window.innerWidth/2-150)}px`
            }}
            onMouseDown={clickXBlock}
            ></div>
            <div className='block' style={{
                top: `${(window.innerHeight/2-1)}px`,
                left: `${(window.innerWidth/2-150)}px`,
                height: '46px',
                width: '95px'
            }}
            onMouseDown={clickXBlock}></div>
            <div className='block'
            style={{
                top: `${(window.innerHeight/2)+50}px`,
                left: `${(window.innerWidth/2-99)}px`,
                height: '46px',
                width: '144px',
            }}
            onMouseDown={clickXBlock}></div>
            <div className='block'
            style={{
                top: `${(window.innerHeight/2)-152}px`,
                left: `${(window.innerWidth/2+50)}px`,
                height: '47px',
                width: '95px'
            }}
            onMouseDown={clickXBlock}></div>
            <div className='block'
            style={{
                top: `${(window.innerHeight/2)-152}px`,
                left: `${(window.innerWidth/2)}px`,
                height: '97px',
                width: '45px'
            }}
            onMouseDown={clickYBlock}></div>
            <div className='block'
            style={{
                top: `${(window.innerHeight/2)- 51}px`,
                left: `${(window.innerWidth/2)}px`,
                height: '97px',
                width: '45px'
            }}
            onMouseDown={clickYBlock}></div>
            <div className='block'
            style={{
                top: `${(window.innerHeight/2)- 101}px`,
                left: `${(window.innerWidth/2)-50}px`,
                height: '97px',
                width: '45px'
            }}
            onMouseDown={clickYBlock}></div>
            <div className='block'
            style={{
                top: `${(window.innerHeight/2)- 101}px`,
                left: `${(window.innerWidth/2)+100}px`,
                height: '97px',
                width: '45px'
            }}
            onMouseDown={clickYBlock}></div>
            <div className='block'
            style={{
                top: `${(window.innerHeight/2)}px`,
                left: `${(window.innerWidth/2)+100}px`,
                height: '97px',
                width: '45px'
            }}
            onMouseDown={clickYBlock}></div>
            <div className='block'
            style={{
                top: `${(window.innerHeight/2)+49}px`,
                left: `${(window.innerWidth/2)-150}px`,
                height: '98px',
                width: '45px'
            }}
            onMouseDown={clickYBlock}></div>
            <div className='block'
            style={{
                top: `${(window.innerHeight/2)-51}px`,
                left: `${(window.innerWidth/2)+50}px`,
                height: '148px',
                width: '45px'
            }}
            onMouseDown={clickYBlock}></div>
        </div>
    )
}

export default Horizontal