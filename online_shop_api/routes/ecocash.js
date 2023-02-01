const { response } = require('express');
const express = require('express')
const {Paynow} = require('paynow')
const router =  express.Router()
let paynow = new Paynow(process.env.Integration_ID,process.env.Integration_Key)

paynow.resultUrl = "http://example.com/gateways/paynow/update";
paynow.returnUrl = "http://example.com/return?gateway=paynow&merchantReference=1234";

router.post('/ecocash',(req,res)=>{
    
    let payment = paynow.createPayment('payment id', 'munyamakudzai095@gmail.com')
    payment.add('router', 1)
    paynow.sendMobile(payment, '0774181243', 'ecocash')
    .then((response)=>{
            !response.success && res.status(401).json('something went wrong')
            let pollUrl = response.pollUrl;
            let status  =  (paynow.pollTransaction(pollUrl))
            !status && res.status(200).json('error')
                res.status(200).json(status)
                
            }).catch((err)=> {
                res.status(500).json(err)
                console.log(err)
    })
        }
    )



module.exports = router