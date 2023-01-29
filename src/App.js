import React, { useEffect, useState, useRef } from 'react';


const App = () => {
    const [ constraints, setConstraints ] = useState({ audio: false, video: false });
    const ref = useRef(null);

    useEffect(() => {
        navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
            ref.current.srcObject = stream;
        });
    }, []);

    return (
        <video
            ref={ref}
            autoPlay
            playsInline
            muted
        />
    )
}

export default App;
