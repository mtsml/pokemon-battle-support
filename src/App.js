import React, { useState } from 'react';


const sampleDevices = [
    { groupId: '1' },
    { groupId: '2' }
]


const App = () => {
    const [devices, setDevices] = useState(sampleDevices);
    const [selectedDevice, setSelectedDevice] = useState(null);

    const handleChange = (event) => {
        setSelectedDevice(event.target.value);
    }

    return (
        <>
            <select value={selectedDevice} onChange={handleChange}>
                {devices.map(device => <option key={device.groupId}>{device.groupId}</option>)}
            </select>
            <button onClick={() => alert('reflesh devices')}>getDevices</button>
        </>
        
    )
}


export default App;
