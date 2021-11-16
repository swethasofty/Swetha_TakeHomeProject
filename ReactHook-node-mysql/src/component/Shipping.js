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
    console.log("nnn",arr)
    pieChart = {
        title: {
          text: null},
        chart: {
          type: "line"},
        xAxis: {
            categories: ['Disputed', 'Resolved', 'On Hold', 'Cancelled', 'In Process','Shipped'],
          title: {
            text: null
          }
        },
      plotOptions: { 
        column: { 
                dataLabels: { enabled: true }
                },
        series: {
            point: {
                events: {
                    click: function () {
                            alert("Category: "+this.category+", value: " +this.y)
                    }
                }
            }
        }
    },
        series: [{
          data:arr,
          name:"Shipping Status",
//           dataLabels: {
//             enabled: true,
//             color: '#000000',
//             backgroundColor: '#FFFFFF',
//             borderWidth: '1',
//             align: 'center',
//             x: 0,
//             y: 0,
//             rotation: 0,
// }
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
