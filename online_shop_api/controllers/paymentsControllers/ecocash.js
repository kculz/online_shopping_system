const {Paynow} = require('paynow')

const makeEcocashPayment = (req,res) => {
    const paynow = new Paynow(process.env.Integration_ID, process.env.Integration_Key)


// Set return and result urls
paynow.resultUrl = "http://example.com/gateways/paynow/update";
paynow.returnUrl = "http://example.com/return?gateway=paynow&merchantReference=1234";

// Create a new payment
let payment = paynow.createPayment("Invoice 35", "munyamakudzai095@gmail.com");

// Add items to the payment list passing in the name of the item and it's price
payment.add("Bananas", 2.5);
payment.add("Apples", 3.4);

// Send off the payment to Paynow
paynow.sendMobile(payment, req.body.paynum, req.body.paymethod)
.then( (response) => {

    // Check if request was successful
    if(response.success) {
        // Get the link to redirect the user to, then use it as you see fit
        let link = response.redirectUrl;

        // Save poll url, maybe (recommended)?
        let pollUrl = response.pollUrl;
        res.status(200).json('success')
    }else{
        res.status(401).json('something went wrong ')
    }

})
.catch((err)=>{
    res.status(500).json(err.response)
})

}
module.exports = {
    makeEcocashPayment
}