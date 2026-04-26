"use client";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function EarningsSection() {
	const stats = [
		{
			label: "Earnings",
			value: "2.00 XLM",
			change: "+12.3%",
			iconColor: "text-green-600",
			changeColor: "text-green-600",
		},
		{
			label: "Active Materials",
			value: "7",
			change: "+8.1%",
			iconColor: "text-green-600",
			changeColor: "text-green-600",
		},
		{
			label: "Total Downloads",
			value: "182",
			change: "-5.3%",
			iconColor: "text-red-600",
			changeColor: "text-red-600",
		},
		{
			label: "Creator Rank",
			value: "#12",
			change: "+3.2%",
			iconColor: "text-green-600",
			changeColor: "text-green-600",
		},
	];

	return (
		<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
			{stats.map((item, index) => (
				<div
					key={index}
					className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
				>
					<div className="flex justify-between items-center mb-3">
						<h3 className="text-sm font-medium text-gray-500">{item.label}</h3>
						<div className={`p-1.5 rounded-full ${item.change.startsWith("+") ? 'bg-green-50' : 'bg-red-50'}`}>
							{item.change.startsWith("+") ? (
								<FaArrowUp className={`w-3 h-3 ${item.iconColor}`} />
							) : (
								<FaArrowDown className={`w-3 h-3 ${item.iconColor}`} />
							)}
						</div>
					</div>
					<div className="text-2xl font-bold mb-1">{item.value}</div>
					<p className={`text-xs font-medium ${item.changeColor}`}>{item.change} from last month</p>
				</div>
			))}
		</div>
	);
}
