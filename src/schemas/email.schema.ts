import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class Email {
  @Prop()
  to: string;

  @Prop()
  from: string;

  @Prop()
  subject: string;

  @Prop({ type: mongoose.Schema.Types.Mixed })
  data?: any;
}

export const EmailSchema = SchemaFactory.createForClass(Email);
