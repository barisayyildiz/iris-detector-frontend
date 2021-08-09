import React, { useState, useRef } from 'react'
import './style.scss'

function RangeSlider({min=0, max=500, initial=(min+max)/2, text}) {

	const rangeRef = useRef(null);
	const [value, setValue] = useState(initial);
	
	const rangeSliderChange = () => {
		setValue(rangeRef.current.value)
	}

	const percentage = ((value-min) / (max-min)) * 100;
	const labelStyle={
		position:"absolute",
		left: `calc(${percentage}%)`,
		top:"-20px"
	}

	return (
		<div className="range-slider-wrapper">
			<input  className="range-slider" ref={rangeRef} type="range" step={0.1} value={value} min={min} max={max} onChange={rangeSliderChange}></input>
			<span style={labelStyle}  className="range-slider-value">{value}</span>
			<p>{text} (cm)</p>
		</div>
	)
}

export default RangeSlider
