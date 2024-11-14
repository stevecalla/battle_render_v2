import { User } from '../models/index.js';
import bcrypt from 'bcrypt';

export const seedUsers = async () => {
    const adminUser =  [{ username: 'admin', win: 4, loss: 2, tie: 0, password:'password'}];

    const hashedUsers = await adminUser.map(user => {
        return {
          ...user,
          password: bcrypt.hashSync(user.password, 10)
        }
      });

    await User.bulkCreate(hashedUsers);
};