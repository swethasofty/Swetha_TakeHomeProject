import { useState,useEffect } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

var pieChart = {  
 }
export default function OrdersByMonth() {
    const [month, setMonth]=useState([])
    const [resultMonth, setMonthResult]=useState([])

    useEffect(async() => {
        const response=await fetch('http://localhost:3001/month')
        const data=await response.json();
        setMonth(data)
        getData(data)
    },[]);

function getData(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        resultMonth.push(arr[i].count)
    }
    pieChart = {
        title: {
          text: null},
        chart: {
          type: "column"},
        xAxis: {
         categories:  ['January','February','March','April','May','June','July','August','September','October','November','December','TOTAL'],
          title: {
            text: null
          }
        },
        series: [{
          data:resultMonth,
          name:"orderdate(month)"
        }]
      }
}
    return (
        <div>
            <HighchartsReact
            highcharts={Highcharts}
            options={pieChart}
            />
        </div>
    )
}
