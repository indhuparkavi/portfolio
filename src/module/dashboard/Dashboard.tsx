import { Box, Paper } from "@mui/material";
import React from "react";
// import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import '../../App.css'

export default function AdminDashboard() {

	const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];
	return (
		<div className="layOut">
			{/* <ResponsiveContainer width="80%" aspect={3}>
				<LineChart data={pdata} margin={{ right: 300 }}>
					<CartesianGrid />
					<XAxis dataKey="name"
						interval={'preserveStartEnd'} />
					<YAxis></YAxis>
					<Legend />
            <Tooltip/>
					<Line dataKey="student"
						stroke="black" activeDot={{ r: 8 }} />
					<Line dataKey="fees"
						stroke="red" activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer> */}
		</div>
	)

}

// Sample chart data
const pdata = [
	{
		name: 'MongoDb',
		student: 11,
		fees: 120
	},
	{
		name: 'Javascript',
		student: 15,
		fees: 12
	},
	{
		name: 'PHP',
		student: 5,
		fees: 10
	},
	{
		name: 'Java',
		student: 10,
		fees: 5
	},
	{
		name: 'C#',
		student: 9,
		fees: 4
	},
	{
		name: 'C++',
		student: 10,
		fees: 8
	},
];

