const paymentCompleted = require('./paymentCompleted');
module.exports= (message) => {

    switch(message.type){
        case 'ORDER_PAYMENT_COMPLETED':
            paymentCompleted(message);
            break;
        default:
            break;    

    }
            
}