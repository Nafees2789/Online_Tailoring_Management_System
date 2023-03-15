import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderItems: [{
        name: {type: String, requried: true},
        qty: {type: Number, required: true},
        image: {type: String, required: true},
        price: {type: Number, required: true},
        product: {type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', required: true,},
    },],

    shippingAddress:{
        shirtLength:{type: String, required: true},
        shirtShoulder:{type: String, required: true},
        shirtChest:{type: String, required: true},
        shirtWaist:{type: String, required: true},
        shirtSleeve:{type: String, required: true},
        shirtArmhole:{type: String, required: true},
        shirtSize:{type: String, required: true},

        pantLengths:{type: String, required: true},
        pantWaists:{type: String, required: true},
        pantHip:{type: String, required: true},
        pantThy:{type: String, required: true},
        pantBottom:{type: String, required: true},
        pantSizes:{type: String, required: true},

        fullName:{type: String, required: true},
        fullName:{type: String, required: true},
        address:{type: String, required: true},
        city:{type: String, required: true},
        postalCode:{type: String, required: true},
        country:{type: String, required: true},
    },
    paymentMethod:{type: String, required: true},
    paymentResult:{
        id: String, 
        status: String, 
        update_time: String, 
        email_address: String,
    },
    itemsPrice:{type: Number, required: true},
    shippingPrice:{type: Number, required: true},
    taxPrice:{type: Number, required: true},
    totalPrice:{type: Number, required: true},
    user:{type: mongoose.Schema.Types.ObjectId, ref:'User', required: true},
    isPaid:{type: Boolean, default: false},
    paidAt:{type: Date},
    isDelivered:{type: Boolean, default: false},
    deliveredAt: {type: Date},    
},{
    timestamps: true,
});
const Order = mongoose.model('Order', orderSchema);
export default Order;