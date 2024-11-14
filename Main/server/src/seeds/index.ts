import sequelize from "../config/connection.js";
import { seedChars } from "./charSeeds.js";

const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('\n----- DATABASE SYNCED -----\n');
        
        await seedChars();
        console.log('\n----- CHARACTERS SEEDED -----\n');
        
        process.exit(0);
      } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
      }
};

seedAll();
