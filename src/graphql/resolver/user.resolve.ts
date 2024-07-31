/* eslint-disable prettier/prettier */
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  @Query(() => String)
  user() {
    return 'Hello Word';
  }
}
