const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const seedBlogPosts = require('./seed'); // <-- Import seeding function

async function connectToMemoryDB() {
  const mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('✅ Connected to in-memory MongoDB');

  // Seed data after connection is established
  await seedBlogPosts();
}

module.exports = connectToMemoryDB;