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
  var name=[];
    for(let i=0;i<arr.length;i++)
    {
        resultcustomer.push(arr[i].number)
        name.push(arr[i].name)
    }
    pieChart = {
        title: {
          text: null},
        chart: {
          type: "bar"},
          xAxis: {
            categories:name
        },
        series: [{
          data:resultcustomer,
          name:"Row Count - orders",
          dataLabels: {
            enabled: true,
            color: '#000000',
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
