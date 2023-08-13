const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

const users = [
    {
        username: 'Adam',
        email: 'ariel@gmail.com',
    },
    {
        username: 'Brad',
        email: 'brad@gmail.com'
    },
    {
        username: 'Chris',
        email: 'chris@gmail.com'
    },
    {
        username: 'Donatello',
        email: 'donny@gmail.com'
    },
    {
        username: 'Elijah',
        email: 'eliyuhh@gmail.com'
    },
    {
        username: 'Fredrickson',
        email: 'fred@gmail.com'
    },
    {
        username: 'Gryffindor',
        email: 'gogryffins@gmail.com'
    },
    {
        username: 'HelloWorld',
        email: 'hithere@gmail.com'
    },
    {
        username: 'Ichban',
        email: 'izzybizzy@gmail.com'
    },
    {
        username: 'Jared',
        email: 'jarjarbread@gmail.com'
    },
    {
        username: 'Kristina',
        email: 'kristina@gmail.com'
    },
  ]

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});
  
    await User.collection.insertMany(users);

    console.info('Seeding complete!');
    process.exit(0);
  });