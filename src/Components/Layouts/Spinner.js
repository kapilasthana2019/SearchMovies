import React from 'react'

function Spinner() {
    return (
        <div>
            <img 
            src={require('../../Assets/Spinner-1.1s-161px.gif')}
            style={{width:"100px",margin:"auto",display:"block"}}
            alt="loading..."
            />
        </div>
    )
}

export default Spinner
