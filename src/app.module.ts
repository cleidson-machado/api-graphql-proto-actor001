import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './graphql/resolver/user.resolve';
import { HelloService } from './hello/hello.service';
import { HelloController } from './hello/hello.controller';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/graphql/schema.gql',
    }),
  ],
  controllers: [HelloController],
  providers: [UserResolver, HelloService],
})
export class AppModule {}
