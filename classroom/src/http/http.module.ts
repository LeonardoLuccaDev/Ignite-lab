import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from '../database/database.module';
import path from 'node:path';
import { ApolloDriver } from '@nestjs/apollo';
import { CoursesResolver } from './graphql/resolvers/courses.resolver';
import { CoursesService } from 'src/services/courses.service';
import { EnrollmentsResolver } from './graphql/resolvers/enrollments.resolver';
import { EnrollmentsService } from 'src/services/enrollments.service';
import { StudentsResolver } from './graphql/resolvers/students.resolver';
import { StudentsService } from 'src/services/students.service';

@Module({
    imports: [
        ConfigModule.forRoot(), 
        DatabaseModule,
        GraphQLModule.forRoot({
            driver: ApolloDriver,
            autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
        }),
    ],
    providers: [
        //Courses
        CoursesResolver,
        CoursesService,

        //Enrollments
        EnrollmentsResolver,
        EnrollmentsService,

        //Students
        StudentsResolver,
        StudentsService
    ]
})
export class HttpModule {}
