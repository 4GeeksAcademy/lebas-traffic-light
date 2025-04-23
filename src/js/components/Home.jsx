import React, { useState, useEffect } from "react";


const Home = () => {
	const [colorIndex, setColorIndex] = useState(null);
	const baseLights = ['red', 'yellow', 'green'];
 	const [ cycle, setCycle ] = useState(false);
	const [ purple, setPurple] = useState(false);
	const lights = purple ? [...baseLights, 'purple'] : baseLights;
	const handleCycle = () => {
		setCycle(!cycle);
    };

	const handlePurple = () => {
		setColorIndex(null);
        setPurple(!purple);
    };
	
	useEffect(() => {
		if (!cycle) return;

		const interval = setInterval(() => {
			setColorIndex((prevIndex) => {
				if (prevIndex === null) return 0; 
				return (prevIndex + 1) % lights.length;
			});
		}, 1000);

		return () => clearInterval(interval);
	}, [cycle, colorIndex]);
	

	return (
		<div>
		<div id="traffictop"></div>
		<div id="container">
			{lights.map((colorLight, index) => (
			<div
			key={colorLight}
			className={`light ${colorLight} ${colorIndex === index ? 'selected' : ''}`}
			onClick={() => {
				if (colorIndex === index) {
				  setColorIndex(null);
				} else {
				  setColorIndex(index);
				  if (colorLight === 'purple') {
					setPurple(true); 
				  } else {
					setPurple(false);
				  }
				}
			  }}
			/>
			))}
		</div>
		<div className="mt-5 position-absolute start-50 translate-middle">
			<button className="btn btn-success me-2" onClick={handleCycle}>Cycle</button>
			<button className="btn btn-success" onClick={handlePurple}>Surprise</button></div>
		</div>
	 
	);
};

export default Home;