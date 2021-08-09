import './App.scss';
import RangeSlider from './components/RangeSlider'
import { useState, useRef } from 'react';
import axios from 'axios';

function App() {

	const containerRef = useRef(null);
	const [response, setResponse] = useState(null);
	const [url, setUrl] = useState(null);

	const makeRequest = () => {
		const array = containerRef.current.children
		const body = {
			"sepal_width" : parseFloat(array[0].firstElementChild.value),
			"sepal_length" : parseFloat(array[1].firstElementChild.value),
			"petal_width" : parseFloat(array[2].firstElementChild.value),
			"petal_length" : parseFloat(array[3].firstElementChild.value)
		}

		console.log(body)

		axios.post('http://127.0.0.1:8000/api/flower/', {
			...body
		}).then(res => {
			const { name, url } = res.data.result;
			setResponse(name);
			setUrl(url);
		})

	}

  return (
    <div className="App">
			<h1 className="header">Iris Flower Detector</h1>
			<div className="slider-container" ref={containerRef}>
				<RangeSlider
					min={0}
					max={10}
					text={"Sepal Width"}
				></RangeSlider>
				<RangeSlider
					min={0}
					max={10}
					text={"Sepal Length"}
				></RangeSlider>
				<RangeSlider
					min={0}
					max={10}
					text={"Petal Width"}
				></RangeSlider>
				<RangeSlider
					min={0}
					max={10}
					text={"Petal Length"}
				></RangeSlider>
			</div>
			<button id="detect" onClick={makeRequest}>Detect</button>
			{
				response && (
						<>
							<h3 style={{fontWeight : '400'}}>Your flower is <span style={{fontWeight:'700'}}>Iris {response}</span></h3>
							<img className="flower_image" stlye={{width:'10px'}} src={url}></img>
						</>
					)
			}
    </div>
  );
}

export default App;
