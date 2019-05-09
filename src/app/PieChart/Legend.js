import React from "react"
import { pie, color } from "./D3Math"

export default ({ data }) => (
	<g transform={`translate(${500},${100})`}>
		{pie(data).map(el => (
			<g key={el.index} transform={`translate(${0},${el.index * 25})`}>
				<rect
					x={-25}
					y={-15}
					rx={3}
					ry={3}
					width={20}
					height={20}
					style={{
						fill: color(el.index),
					}}
				/>
				<text>{el.data.subject}</text>
			</g>
		))}
	</g>
)
