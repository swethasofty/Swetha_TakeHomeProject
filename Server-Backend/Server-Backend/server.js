const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const PORT = 3001;
const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'password',
    database:'classicmodels',
})
app.use(bodyParser.urlencoded({extende:true}))
app.use(cors())
app.use(express.json())

//Orders By Shipping Status
app.get('/get',(req,res)=>{
   const sqlselect='SELECT count(orderNumber)as y,status as name FROM classicmodels.orders GROUP BY  status ORDER BY COUNT(orderNumber)';
   db.query(sqlselect,(err,result)=>{
    console.log(result)
      res.send(result) 
   })
})

//Count of Orders By Month
app.get('/month',(req,res)=>{
    const sqlMonth="SELECT  MONTH(shippedDate) MONTH,  COUNT(*) as count FROM  classicmodels.orders WHERE YEAR(shippedDate) = '2003' GROUP BY  MONTH(shippedDate)";
    db.query(sqlMonth,(err,result)=>{
     console.log(result)
       res.send(result) 
    })
})

//Top 5 Customers By Orders
app.get('/customer',(req,res)=>{
const sqlMonth="SELECT contactFirstName as name,COUNT(orderNumber) AS number FROM classicmodels.customers LEFT JOIN classicmodels.orders AS o USING (customerNumber) GROUP BY (o.customerNumber) ORDER BY Number DESC LIMIT 5";
    db.query(sqlMonth,(err,result)=>{
     console.log(result)
       res.send(result) 
    })
})
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});