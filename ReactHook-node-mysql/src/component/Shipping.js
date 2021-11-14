import { useState,useEffect } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


var pieChart = {  
 }
export default function Shipping({orderstatus}) {
    const [status, setStatus]=useState([]);
    const [result, setResult]=useState([]);
    
    useEffect(async() => {
        const response=await fetch('http://localhost:3001/get')
        const data=await response.json();
        setStatus(data)
        getData(data)
    },[]);

function getData(arr)
{
    for(let i=0;i<arr.length;i++)
    {
      result.push(arr[i].y)
    }
    pieChart = {
        title: {
          text: null},
        chart: {
          type: "pie"},
        xAxis: {
            categories: ['Disputed', 'Resolved', 'On Hold', 'Cancelled', 'In Process','Shipped'],
          title: {
            text: null
          }
        },
        series: [{
          data:arr
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
