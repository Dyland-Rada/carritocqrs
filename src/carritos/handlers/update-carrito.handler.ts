import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateCarritoCommand } from '../commands/update-carrito.command';
import { Carrito } from '../entities/carrito.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@CommandHandler(UpdateCarritoCommand)
export class UpdateCarritoHandler implements ICommandHandler<UpdateCarritoCommand> {
  constructor(
    @InjectRepository(Carrito)
    private readonly carritoRepository: Repository<Carrito>,
  ) {}

  async execute(command: UpdateCarritoCommand): Promise<Carrito> {
    const { id, data } = command;
    await this.carritoRepository.update(id, data);
    return this.carritoRepository.findOneBy({ id });
  }
}
