import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('carritos')
export class Carrito {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  codigo: string;

  @Column()
  contraseña: string;

  @Column()
  email: string;

  @Column()
  idCliente: number;

  @CreateDateColumn()
  fechaCreacion: Date;

  @UpdateDateColumn()
  fechaActualizacion: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  totalCarrito: number;

  @Column()
  estado: string;

  @Column('simple-json')
  items: { id: number, cantidad: number }[];

  @Column()
  idSesion: string;
}
