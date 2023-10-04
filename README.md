# Clean Architecture With NestJS

## About

This repository is a sample project for the Clean Architecture with NestJS.

![image](https://github.com/Natanaelvich/clean-arch-nestjs_ignite-rocketseat-23/assets/52014318/ed6c4626-095e-41c1-bfe2-ec36fa246ad4)

## Technologies

- NestJS
- TypeScript
- Prisma
- PostgreSQL
- Docker
- Vitest
- FakerJS
- DayJS

## How to run

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [NodeJS](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)
- [NestJS CLI](https://docs.nestjs.com/cli/overview)

### Running the project

1. Run `docker-compose up -d` to start the database.
2. Run `yarn install` to install the dependencies.
3. Run `yarn prisma migrate dev` to run the migrations.
4. Run `yarn start:dev` to start the application.

### Running the tests

1. Run `test:e2e` to run the end-to-end tests.
2. Run `test` to run the unit tests.

## License

This repository is licensed under the MIT License. See the [LICENSE](/LICENSE) file for details.
