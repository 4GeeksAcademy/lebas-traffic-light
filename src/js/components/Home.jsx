import React, { useState } from "react";


const Home = () => {
	const [ color, setColor ] = useState(null);
	const lights = ['red', 'yellow', 'green'];

	return (
		<div>
		<div id="traffictop"></div>
		<div id="container">
			{lights.map((colorLight) => (
			<div
				key={colorLight}
				className={`light ${colorLight} ${color === colorLight ? 'selected' : ''}`}
				onClick={() => setColor(colorLight)}
			/>
			))}
		</div>
		</div>
	 
	);
};

export default Home;