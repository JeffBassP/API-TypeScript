const mongoose = require('mongoose');

let database: any;
let userSchema: any;

class UserController {

  async connectDatabase() {
    database = database || mongoose.connect('mongodb+srv://usuario:jeferson@arbyte.obhjq.mongodb.net/devlopment?retryWrites=true&w=majority', {
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
    const database = await this.connectDatabase();
    
    await this.createUserSchema(database);
   
    const {
      User
    } = database.models;
    
    const users = User.find();
    
    return users;
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