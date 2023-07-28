import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_CONNECTION',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'temtudoaki',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        //Synchronize não pode ficar true em produção para evitar erros, já que ele atualiza o que foi feito no banco
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];