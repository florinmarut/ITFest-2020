import React, {useRef} from 'react';

function Canvas(){
    const canvasRef = useRef(null);
    return (<canvas ref={canvasRef}></canvas>);
}

export default Canvas;