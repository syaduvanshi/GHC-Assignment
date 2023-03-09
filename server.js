const express = require('express');
const app = express();
const schedule = require('node-schedule');
require('dotenv').config();




schedule.scheduleJob('0 17 ? * 0,4-6', async()=>{
    await checkifitLiesInFirstMessage();
    await checkifitLiesInSecondMessage();
    await checkifitLiesInThirdMessage();
  });





app.listen(8000,()=>{
    console.log("Server started on Port 8000");
})