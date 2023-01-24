const { response } = require('express');
const express = require('express')
const {Paynow} = require('paynow')
const router =  express.Router()
let paynow = new Paynow(process.env.Integration_ID,process.env.Integration_Key)

paynow.resultUrl = "http://example.com/gateways/paynow/update";
paynow.returnUrl = "http://example.com/return?gateway=paynow&merchantReference=1234";

router.post('/ecocash',(req,res)=>{
    let payment = paynow.createPayment('jdbvjhd', 'munyamakudzai095@gmail.com')
    payment.add('router', 35)
    paynow.sendMobile(payment, '0774444444', 'ecocash').then((response)=>{
        if(!response.success){
            res.status(401).json('something went wrong')
            console.log('something went wrong')
        }else{
            let pollUrl = response.pollUrl;
            let status  =  (paynow.pollTransaction(pollUrl))
            if(status){
                res.status(200).json(status)
                 console.log(status)
            }else{
                res.status(200).json('error')
                 console.log('error')
            }
            
            // !status.paid() && res.status(500).json('not paid')
            
        }
    }).catch((err)=> {
        res.status(500).json(err)
        console.log(err)
    })
   

})


module.exports = router