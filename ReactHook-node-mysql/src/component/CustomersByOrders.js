import { useState,useEffect } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


var pieChart = {  
 }
export default function CustomersByOrders() {
    const [customerData, setCustomerData]=useState([])
    const [resultcustomer, setcustomerResult]=useState([])

    useEffect(async() => {
        const response=await fetch('http://localhost:3001/customer')
        const data=await response.json();
        setCustomerData(data)
        getData(data)
    },[]);

function getData(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        resultcustomer.push(arr[i].number)
    }
    pieChart = {
        title: {
          text: null},
        chart: {
          type: "bar"},
        xAxis: {
          categories:  ['Diego','Susan','Jytte ','Peter','Eric'],
          title: {
            text: null
          }
        },
        series: [{
          data:resultcustomer,
          name:"Row count - orders"
        }]
      }

      console.log(arr)
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
