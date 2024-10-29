import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCarritoByIdQuery } from '../queries/get-carrito-by-id.query';
import { Carrito } from '../entities/carrito.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@QueryHandler(GetCarritoByIdQuery)
export class GetCarritoByIdHandler implements IQueryHandler<GetCarritoByIdQuery> {
  constructor(
    @InjectRepository(Carrito)
    private readonly carritoRepository: Repository<Carrito>,
  ) {}

  async execute(query: GetCarritoByIdQuery): Promise<Carrito> {
    return await this.carritoRepository.findOneBy({ id: query.id });
  }
}
