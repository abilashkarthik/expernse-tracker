import React ,{useContext}from 'react'
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { GlobalContext } from '../context/GlobalState'

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const Chart = () => {

    const {transactions} = useContext(GlobalContext)
  return (
    <>
     <div className="dataCard revenueCard">
        <Line
          data={{
            labels: transactions.map((data) => data.amount),
            datasets: [
              {
                label: "Category Name",
                data: transactions.map((data) => data.text),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "Cost",
                data: transactions.map((data) => data.amount),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Expenses",
              },
            },
          }}
        />
      </div>




    </>
  )
}

export default Chart