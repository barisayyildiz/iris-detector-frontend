import React, { useState, useRef } from 'react'
import './style.scss'

function RangeSlider({min=0, max=500, initial=(min+max)/2, text}) {

	const rangeRef = useRef(null);
	const [value, setValue] = useState(initial);
	
	const rangeSliderChange = () => {
		setValue(parseInt(rangeRef.current.value))
	}


	const percentage = ((value-min) / (max-min)) * 100;
	console.log(percentage)

	const labelStyle={
		position:"absolute",
		left: `calc(${percentage}%)`,
		top:"-20px"
	}

	return (
		<div class="range-slider-wrapper">
			<input  class="range-slider" ref={rangeRef} type="range" value={value} min={min} max={max} onChange={rangeSliderChange}></input>
			<span style={labelStyle}  class="range-slider-value">{value}</span>
			<p>{text} (cm)</p>
		</div>
	)
}

export default RangeSlider
