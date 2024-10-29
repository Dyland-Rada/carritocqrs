import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { Carrito } from './entities/carrito.entity';
import { CarritoController } from './carrito.controller';
import { CreateCarritoHandler } from './handlers/create-carrito.handler';
import { GetCarritoByIdHandler } from './handlers/get-carrito-by-id.handler';
import { UpdateCarritoHandler } from './handlers/update-carrito.handler';
import { DeleteCarritoHandler } from './handlers/delete-carrito.handler';

@Module({
  imports: [TypeOrmModule.forFeature([Carrito]), CqrsModule],
  controllers: [CarritoController],
  providers: [
    CreateCarritoHandler,
    GetCarritoByIdHandler,
    UpdateCarritoHandler,
    DeleteCarritoHandler,
  ],
})
export class CarritoModule {}
