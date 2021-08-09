import './App.scss';
import RangeSlider from './components/RangeSlider'

function App() {
  return (
    <div className="App">
			
			<h1 className="header">Iris Flower Detector</h1>

			<div className="slider-container">
				
				<RangeSlider
					min={100}
					max={200}
					text={"Sepal Width"}
				></RangeSlider>

				<RangeSlider
					min={100}
					max={200}
					text={"Sepal Length"}
				></RangeSlider>

				<RangeSlider
					min={100}
					max={200}
					text={"Petal Width"}
				></RangeSlider>

				<RangeSlider
					min={100}
					max={200}
					text={"Petal Length"}
				></RangeSlider>

			</div>

			<button id="detect">Detect</button>

    </div>
  );
}

export default App;
