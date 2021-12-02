const bcrypt = require('bcryptjs');

const data = {
    users: [
        {
            name: 'Jose',
            email: 'adming@amazonia.com',
            password: bcrypt.hashSync('22111', 8),
            isAdmin: true,
        },
        {
            name: 'Bezos',
            email: 'bezos@amazonia.com',
            password: bcrypt.hashSync('22111', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            _id: '1',
            name: 'Gucci Shirt',
            category: 'Shirts',
            image: '/images/dude.jpg',
            price: 200,
            countInStock: 10,
            brand: 'Gucci',
            rating: 5,
            numReviews: 9,
            description: 'stylish gucci shirt'
        },
        {
            _id: '2',
            name: 'Gucci Shoes',
            category: 'Shirts',
            image: '/images/dude.jpg',
            price: 50,
            countInStock: 20,
            brand: 'Gucci',
            rating: 4,
            numReviews: 9,
            description: 'stylish gucci shirt'
        },
        {
            _id: '3',
            name: 'Gucci Pants',
            category: 'Shirts',
            image: '/images/dude.jpg',
            price: 300,
            countInStock: 5,
            brand: 'Gucci',
            rating: 5,
            numReviews: 9,
            description: 'stylish gucci shirt'
        },
        {
            _id: '4',
            name: 'Gucci Belt',
            category: 'Shirts',
            image: '/images/dude.jpg',
            price: 100,
            countInStock: 8,
            brand: 'Gucci',
            rating: 5,
            numReviews: 9,
            description: 'stylish gucci shirt'
        },
        {
            _id: '5',
            name: 'Gucci Sweater',
            category: 'Shirts',
            image: '/images/dude.jpg',
            price: 200,
            countInStock: 0,
            brand: 'Gucci',
            rating: 2,
            numReviews: 9,
            description: 'stylish gucci shirt'
        },
        {
            _id: '6',
            name: 'Gucci Tie',
            category: 'Shirts',
            image: '/images/dude.jpg',
            price: 200,
            countInStock: 1,
            brand: 'Gucci',
            rating: 3.5,
            numReviews: 2,
            description: 'stylish gucci shirt'
        }
    ]
}


module.exports = data;
