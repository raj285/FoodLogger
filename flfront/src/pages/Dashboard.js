import React from 'react'
import ApexCharts from "apexcharts";
const Dashboard = () => {
  var options = {
    chart: {
      type: "line",
    },
    series: [
      {
        name: "sales",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);

  chart.render();
  return (
    <>
      <div>
        <p className='text-4xl'>Your Dashboard</p>
        <div>
          <div>Quick Add to Diary</div>
          <ul className='flex justify-evenly items-center'>
            <li><>FOOD</></li>
            <li>calorie Burnt</li>
            <li>Exercise</li>
          </ul>
        </div>
        <div>
          

        </div>
      </div>
    </>
  )
}

export default Dashboard
