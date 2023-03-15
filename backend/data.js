import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: 'Nafees',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Anees',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },

    ],
    products:[
        {
           
            name:'Slim Shirt',
            category:'Shirts',
            image:'/images/p1.jpg',
            price:750,
            countInStock:10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'Good Quality Product',
        },
        {
            
            name:'Fit Shirt',
            category:'Shirts',
            image:'/images/p2.jpg',
            price:50,
            countInStock:20,
            brand:'Adidas',
            rating:4.0,
            numReviews:9,
            description:'Best Quality Product',
        },
        {
            
            name:'Free Shirt',
            category:'Shirts',
            image:'/images/p3.jpg',
            price:999,
            countInStock:0,
            brand:'Puma',
            rating:4.8,
            numReviews:19,
            description:'High Quality Product',
        },
        {
            
            name:'Slim Pants',
            category:'Pants',
            image:'/images/p4.jpg',
            price:1400,
            countInStock:40,
            brand:'Nike',
            rating:4.5,
            numReviews:14,
            description:'Good Quality Product',
        },
        {
            
            name:'Fit Pant',
            category:'Pants',
            image:'/images/p5.jpg',
            price:1300,
            countInStock:5,
            brand:'Adidas',
            rating:4.3,
            numReviews:12,
            description:'Best Quality Product',
        },
        {
            
            name:'Free Pant',
            category:'Shirts',
            image:'/images/p6.jpg',
            price:1499,
            countInStock:15,
            brand:'Puma',
            rating:4.6,
            numReviews:20,
            description:'Best Quality Product',
        },
    ],
};
export default data;