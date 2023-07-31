import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'temtudoaki',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      //synchronize configura se irá atualizar o banco automaticamente ou não, deixar false em produção para evitar erros de banco, testar antes de iniciar
      synchronize: true,
    }),
  },
];