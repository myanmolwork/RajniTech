const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const Admin = require('./models/Admin');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const existing = await Admin.findOne({ email: 'admin@rajni.com' });
    if (existing) {
      console.log('Admin already exists ❗');
      return process.exit();
    }

    const hashedPassword = await bcrypt.hash('admin123', 10);
    await Admin.create({
      email: 'admin@rajni.com',
      password: hashedPassword
    });

    console.log('✅ Admin user created');
    process.exit();
  })
  .catch((err) => {
    console.error('❌ MongoDB Connection Failed:', err);
    process.exit(1);
  });
