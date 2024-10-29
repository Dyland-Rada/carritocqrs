import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateCarritoCommand } from '../commands/create-carrito.command';
import { Carrito } from '../entities/carrito.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@CommandHandler(CreateCarritoCommand)
export class CreateCarritoHandler implements ICommandHandler<CreateCarritoCommand> {
  constructor(
    @InjectRepository(Carrito)
    private readonly carritoRepository: Repository<Carrito>,
  ) {}

  async execute(command: CreateCarritoCommand): Promise<Carrito> {
    const { codigo, contraseña, email, idCliente, totalCarrito, estado, items, idSesion } = command;
    const carrito = this.carritoRepository.create({
      codigo,
      contraseña,
      email,
      idCliente,
      totalCarrito,
      estado,
      items,
      idSesion,
    });
    return await this.carritoRepository.save(carrito);
  }
}
