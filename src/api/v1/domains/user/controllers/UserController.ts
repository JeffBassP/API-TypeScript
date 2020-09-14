const mongoose = require('mongoose');
require('dotenv').config();

import errors from '../../../../../common/errors/error-helper';

let database: any;
let userSchema: any;
const mongo = process.env.MONGO;

class UserController {

  async connectDatabase() {
    database = database || mongoose.connect(mongo, {
      useNewUrlParses: true,
      useUnifiedTopology: true
    });

    return database;
  }

  async createUserSchema(database: any) {
    if (userSchema) {
      return;
    }

    userSchema = new database.Schema({
      name: String
    }, {
      timestamp: true
    });

    database.model('User', userSchema);
  };

  async getUSer() {
    try {
      const database = await this.connectDatabase();
    
      await this.createUserSchema(database);
   
      const {
        User
      } = database.models;
      
      const users = User.find();
      
      return users;
    } catch{
      throw errors.generic.notFound();
    }
  };

  async createUser({ name }: { name: String }) {
    const database = await this.connectDatabase();

    await this.createUserSchema(database);

    const {
      User
    } = database.models;

    const user = new User({
      name
    });

    return user.save();
  };

  async updateUser({ id }: any, { name }: { name: String }) {
    const database =  await this.connectDatabase();

    await this.createUserSchema(database);

    const {
      User
      } = database.models;


    return User.update({
      _id: id
    }, {
      name
    });

  };

  async deleteUser({ id }: any) {
    const database = await this.connectDatabase();
    await this.createUserSchema(database);

    const {
      User
    } = database.models;
    
    return User.deleteOne({
      _id: id
    });
  };
}

export default UserController;