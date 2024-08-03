import { Schema } from 'mongoose';
import { User } from '../user.schema';

export class UserTokenDto {
  email: string;
  name: string;
  _id: Schema.Types.ObjectId;

  constructor(model: User) {
    this.email = model.email;
    this.name = model.name;
    this._id = model._id;
  }
}
