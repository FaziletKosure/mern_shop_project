const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
   orderItems:[
       {
        name:{type:String,require:true},
        qyt:{type:Number,require:true},
       Image:{type:String,require:true},
       price:{type:Number,require:true},
        product:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'Product'
        },
       }
   ],
   shippingAddress:{
    address:{type:String,require:true},
    city:{type:String,require:true},
    postalCode:{type:String,require:true},
    country:{type:String,require:true},
    },
  paymentMethod:{
        type:String,
        required:true,
    },
    paymentResult:{
       id:{type:String},
       status:{type:String},
       update_time:{type:String},
       email_address:{type:String},
    },
   taxPrice:{
        type:Number,
        required:true,
        default:0.0,
    },
    shippingPrice:{
        type:Number,
        required:true,
        default:0.0,
    },
   totalPrice:{
        type:Number,
        required:true,
        default:0.0,
    },
   isPaid:{
        type:Boolean,
        required:true,
        default:false,
    },
    paidAt:{
        type:Date,
        
    },
    isDelivered:{
        type:Boolean,
        required:true,
        default:false,
    },
   deliveredAt:{
        type:Date,
        
    },
},{
    timestamps: true
})

const Order = mongoose.model('Order',orderSchema)

module.exports = Order