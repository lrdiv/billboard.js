import React, {useEffect, useRef} from "react";

import bb, {bar, line} from "billboard.js";
import "billboard.js/dist/billboard.css";
import BillboardJS, {IChart} from "../src/index";
// import BillboardJS, {IChart} from "@billboard.js/react";

/**
 * Default App
 * @returns {JSX.Element}
 */
function App() {
	const chartComponent = useRef<IChart>();

	const d = {
		data: {
			columns: [
				["data1", 300, 350, 300],
				["data4", 30, 20, 50]
			],
			type: line()
		}
	};

	const d2 = {
		data: {
			columns: [
				["data1", 100, 250, 100],
				["data2", 300, 120, 250]
			],
			type: bar()
		}
	};

	useEffect(() => {
		const chart = chartComponent.current?.instance;

		if (chart) {
			chart.load({
				columns: [
					["data1", 130, 120, 150],
					["data4", 30, 20, 50]
				],
				unload: true
			});
		}

		// @ts-ignore
		// expose all instances to global
		window.charts = chart.internal.charts;
	}, []);

	return (
		<div className="App" style={{width: "500px"}}>
			<BillboardJS bb={bb} options={d} ref={chartComponent} />
			<BillboardJS bb={bb} options={d2} />
		</div>
	);
}

export default App;
