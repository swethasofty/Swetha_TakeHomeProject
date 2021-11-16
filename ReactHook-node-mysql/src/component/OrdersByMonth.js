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
    console.log(arr)
    pieChart = {
        title: {
          text: null},
        chart: {
          type: "column"},
        xAxis: {
         categories:  ['Jan 2003','Feb 2003','Mar 2003','Apr 2003','May 2003','Jun 2003','Jul 2003','Aug 2003','Sep 2003','Oct 2003','Nov 2003','Dec 2003'],
          title: {
            text: null
          }
        },
        dataLabels: {
          enabled: true
      },
      plotOptions: { column: { 
        dataLabels: { enabled: true }
      },
      animation: {
        duration: 2000
    },
        series: {
            point: {
                events: {
                    click: function () {
                            alert("Category:"+this.category+", value: "+this.y)
                    }
                }
            }
        }
    },
    series: [{
      data:resultMonth,
      name:"Order Date(month)",
      dataLabels: {
        enabled: true,
        color: '#000000',
        backgroundColor: '#FFFFFF',
        borderWidth: '1',
        align: 'center',
        x: 0,
        y: 0,
        rotation: 0,
            }
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
