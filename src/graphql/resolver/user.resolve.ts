/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserArgs } from '../dto/create-user.args';
import { UserObject } from '../object/user.object';

@Resolver()
export class UserResolver {
  @Query(() => String)
  users() {
    return 'Hello Word';
  }

  @Mutation(() => UserObject)
  createOneUser(@Args() args: CreateUserArgs) {
    console.log(args);
    return args.data;
  }

  @Mutation(() => String)
  createOneUser2(@Args() args: CreateUserArgs) {
    console.log(args);
    return 'A User Was Created Whith Sucess!';
  }

  @Mutation(() => String)
  createTheUser() {
    return 'Do you are a BIG MDF ever!?';
  }
}
