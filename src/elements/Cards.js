import React from 'react'
import propType from 'prop-types'
import Fade from 'react-reveal/Fade';

export default function Cards(props) {
    const className = ["tiles-item"]
    className.push(props.className)
    return (
        <div className={className.join(" ")}>
            <Fade bottom delay={props.delayInMs}>
                <div className={`tiles-item-inner ${props.hasShadow ? " has-shadow" : ""}`}>
                    {props.children}
                </div>
            </Fade>
        </div>
    )
}

Cards.propType ={
    hasShadow:propType.bool,
    className:propType.string,
    delayInMs:propType.number
}