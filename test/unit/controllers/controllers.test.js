const mongoose = require('mongoose');
const controller = require('../../../src/api/v1/domains/user/controllers/UserController');
const mockUserList = require('./../mock/userList.json');

jest.mock('mongoose');

let database;

const SRV = 'mongodb+srv://usuario:jeferson@arbyte.obhjq.mongodb.net/devlopment?retryWrites=true&w=majority';

describe('Suite de testes unitarios do Controller', () => {
    beforeAll(() =>{
        database = class Mongoose {};

        database.Schema = class {};

        database.model = jest.fn().mockResolvedValue(null);

        database.models = {};
        database.models.User = class {
            constructor(params){
                this.name = params.name;
            }

            save(){
                return{
                    user: this.name,
                    status:200,
                    message: 'OK'
                };
            }
        };
        database.models.User.find = jest.fn().mockResolvedValue(mockUserList);

        mongoose.connect.mockResolvedValue(database);

    });
    describe('getUser()', () => {
        it('should return a user name', async () => {

            const result = await controller.getUSer();

            expect(mongoose.connect).toHaveBeenCalledTimes(1);
            expect(mongoose.connect).toHaveBeenCalledWith(SRV, {
                userNewUrlParser: true,
                useUnifiedTopology: true
            });

            expect(database.model).toHaveBeenCalledTimes(1);
            expect(database.model).toHaveBeenCalledWith('User', new database.Schema());

            expect(database.models.User.find).toHaveBeenCalledTimes(1);
            expect(database.models.User.find).toHaveBeenCalledWith();

            expect(result).toEqual(mockUserList);
        }); 
    });
});

