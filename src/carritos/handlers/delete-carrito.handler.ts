import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteCarritoCommand } from '../commands/delete-carrito.command';
import { Carrito } from '../entities/carrito.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@CommandHandler(DeleteCarritoCommand)
export class DeleteCarritoHandler implements ICommandHandler<DeleteCarritoCommand> {
  constructor(
    @InjectRepository(Carrito)
    private readonly carritoRepository: Repository<Carrito>,
  ) {}

  async execute(command: DeleteCarritoCommand): Promise<void> {
    await this.carritoRepository.delete(command.id);
  }
}
