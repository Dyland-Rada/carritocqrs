import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateCarritoCommand } from './commands/create-carrito.command';
import { UpdateCarritoCommand } from './commands/update-carrito.command';
import { DeleteCarritoCommand } from './commands/delete-carrito.command';
import { GetCarritoByIdQuery } from './queries/get-carrito-by-id.query';

@Controller('carritos')
export class CarritoController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async create(@Body() createCarritoDto: any) {
    const { codigo, contraseña, email, idCliente, totalCarrito, estado, items, idSesion } = createCarritoDto;
    return this.commandBus.execute(
      new CreateCarritoCommand(codigo, contraseña, email, idCliente, totalCarrito, estado, items, idSesion)
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.queryBus.execute(new GetCarritoByIdQuery(id));
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateCarritoDto: any) {
    return this.commandBus.execute(new UpdateCarritoCommand(id, updateCarritoDto));
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.commandBus.execute(new DeleteCarritoCommand(id));
  }
}
