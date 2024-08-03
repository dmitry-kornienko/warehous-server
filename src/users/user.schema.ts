import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
}

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, unique: false })
  password: string;

  @Prop({ default: '' })
  tokenWB: string;

  @Prop({
    type: String,
    enum: UserRole,
    default: UserRole.MANAGER,
  })
  role: UserRole;

  _id: MongooseSchema.Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);
