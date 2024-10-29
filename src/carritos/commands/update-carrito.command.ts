export class UpdateCarritoCommand {
    constructor(
      public readonly id: number,
      public readonly data: Partial<{
        codigo: string;
        contraseña: string;
        email: string;
        totalCarrito: number;
        estado: string;
        items: { id: number, cantidad: number }[];
        idSesion: string;
      }>
    ) {}
  }
  