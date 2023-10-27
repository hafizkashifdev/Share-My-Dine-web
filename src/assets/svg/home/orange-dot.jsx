import React from 'react'

export const OrangeDot = ({ fill = "#FF611D",style }) => {
    return (
        <>
            <svg width="81" style={style} className="position-absolute" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Frame">
                    <g id="Group">
                        <circle id="Ellipse" cx="45.5684" cy="45.568" r="26.4295" stroke="black" strokeWidth="1.82272" strokeDasharray="3.65 3.65" />
                        <circle id="Ellipse_2" cx="45.5688" cy="45.5681" r="12.759" fill={fill} stroke="black" strokeWidth="1.82272" />
                    </g>
                </g>
            </svg>

        </>
    )
}
