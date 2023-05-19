import React from 'react';

console.log(window.innerWidth)

function clickXBlock(e) {
    var x = e.clientX
    var positionI = parseInt(e.target.style.left.slice(0,-2));
    console.log(positionI, 'here')
    document.onmousemove = dragBlock
    document.onmouseup = closeDragElement

    function dragBlock(e) {
        e = e || window.event 
        var xChange = e.clientX - x;
        console.log(parseInt(positionI + xChange).toString().concat('px'))
        // if(parseInt(e.target.style.left.slice(0, -2)) >= (window.innerWidth/2-147)) {
        e.target.style.left = parseInt(positionI + xChange).toString().concat('px')
        // }
    }
    // console.log(parseInt(e.target.style.left.slice(0, -2.)), 'here')

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
}


function Horizontal() {
    return (
        <div>
            <div id='redBlock' style={{
                top: `${(window.innerHeight/2)-47}px`,
                left: `${(window.innerWidth/2-148)}px`
            }}
            onMouseDown={clickXBlock}
            ></div>
            <div className='block' style={{
                top: `${(window.innerHeight/2)+3}px`,
                left: `${(window.innerWidth/2-149)}px`,
                height: '46px',
                width: '95px'
            }}
            onMouseDown={clickXBlock}></div>
            <div className='block'
            style={{
                top: `${(window.innerHeight/2)+53}px`,
                left: `${(window.innerWidth/2-99)}px`,
                height: '46px',
                width: '144px',
            }}
            onMouseDown={clickXBlock}></div>
            <div className='block'
            style={{
                top: `${(window.innerHeight/2)-149}px`,
                left: `${(window.innerWidth/2+48)}px`,
                height: '47px',
                width: '95px'
            }}
            onMouseDown={clickXBlock}></div>
            <div className='block'
            style={{
                top: `${(window.innerHeight/2)-149}px`,
                left: `${(window.innerWidth/2)}px`,
                height: '97px',
                width: '45px'
            }}
            onMouseDown={clickXBlock}></div>
            <div className='block'
            style={{
                top: `${(window.innerHeight/2)- 48}px`,
                left: `${(window.innerWidth/2)}px`,
                height: '97px',
                width: '45px'
            }}
            onMouseDown={clickXBlock}></div>
            <div className='block'
            style={{
                top: `${(window.innerHeight/2)- 98}px`,
                left: `${(window.innerWidth/2)-50}px`,
                height: '97px',
                width: '45px'
            }}
            onMouseDown={clickXBlock}></div>
            <div className='block'
            style={{
                top: `${(window.innerHeight/2)- 98}px`,
                left: `${(window.innerWidth/2)+98}px`,
                height: '97px',
                width: '45px'
            }}
            onMouseDown={clickXBlock}></div>
            <div className='block'
            style={{
                top: `${(window.innerHeight/2)+2}px`,
                left: `${(window.innerWidth/2)+98}px`,
                height: '97px',
                width: '45px'
            }}
            onMouseDown={clickXBlock}></div>
            <div className='block'
            style={{
                top: `${(window.innerHeight/2)+52}px`,
                left: `${(window.innerWidth/2)-149}px`,
                height: '98px',
                width: '45px'
            }}
            onMouseDown={clickXBlock}></div>
            <div className='block'
            style={{
                top: `${(window.innerHeight/2)-49}px`,
                left: `${(window.innerWidth/2)+49}px`,
                height: '148px',
                width: '45px'
            }}
            onMouseDown={clickXBlock}></div>
        </div>
    )
}

export default Horizontal