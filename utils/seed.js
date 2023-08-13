const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

const users = [
    {
        username: 'Alpha',
        email: 'Alpha@email.com'
    },
    {
        username: 'Beta',
        email: 'Beta@email.com'
    },
    {
        username: 'Gamma',
        email: 'Gamma@email.com'
    },
    {
        username: 'Delta',
        email: 'Delta@email.com'
    },
    {
        username: 'Epsilon',
        email: 'Epsilon@email.com'
    },
    {
        username: 'Zeta',
        email: 'Zeta@email.com'
    }
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