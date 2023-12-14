import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from './database/database.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { FooResolver } from './app.resolver';
import { HeroModule } from 'src/hero/hero.module';
import { PowerModule } from './power/power.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: true,
    }),
    HeroModule,
    PowerModule,
  ],
  providers: [FooResolver],
})
export class AppModule {}
