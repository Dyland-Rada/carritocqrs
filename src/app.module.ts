import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarritoModule } from './carritos/carrito.module';
import { Carrito } from './carritos/entities/carrito.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // Cambia a tu host de MySQL
      port: 3306,
      username: 'root', // Cambia a tu usuario de MySQL
      password: '', // Cambia a tu contraseña de MySQL
      database: 'carritoscqrs', // Cambia al nombre de tu base de datos
      entities: [Carrito],
      synchronize: true, // Para desarrollo, sincronizará tus tablas automáticamente
    }),
    CarritoModule,
  ],
})
export class AppModule {}