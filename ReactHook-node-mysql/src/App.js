import { useState,useEffect } from "react";
import './index.css';
import Shipping from './component/Shipping'
import OrdersByMonth from './component/OrdersByMonth'
import CustomersByOrders from './component/CustomersByOrders'
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';

function App() {

  const [month, setMonth]=useState([])
  const [resultMonth, setMonthResult]=useState([])
  useEffect(() => {
    getDataMonth()
  }, [])

  function getDataMonth()
  {
    fetch('http://localhost:3001/month')
    .then(response => response.json())
    .then(data => setMonth(data));
    for(let i=0;i<month.length;i++)
    {
      resultMonth.push(month[i].count)
    }
  }
  
return (
<div className="app">
{/* <div className="site-card-wrapper"> */}
<div>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Orders By Shipping Status" bordered={true}>
          <Shipping />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Count of Orders By Month" bordered={true}>
          <OrdersByMonth />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Top 5 Customers By Orders" bordered={true}>
          <CustomersByOrders />
        </Card>
      </Col>
    </Row>
  </div>
    </div>
  );
}

export default App;
