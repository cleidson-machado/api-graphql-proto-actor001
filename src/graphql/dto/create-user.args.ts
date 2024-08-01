/* eslint-disable prettier/prettier */

import { ArgsType, Field } from '@nestjs/graphql';
import { CreateUserDto } from './create-user.dto';

@ArgsType()
export class CreateUserArgs {
  @Field()
  data: CreateUserDto;
}
