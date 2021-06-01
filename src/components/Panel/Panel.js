import React from 'react';
import './Panel.css'

function Panel (props) {
    return (
        <div className = 'panel'>
            { props.children }
        </div>
    )

}

export default Panel;