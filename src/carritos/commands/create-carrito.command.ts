export class CreateCarritoCommand {
    constructor(
      public readonly codigo: string,
      public readonly contraseña: string,
      public readonly email: string,
      public readonly idCliente: number,
      public readonly totalCarrito: number,
      public readonly estado: string,
      public readonly items: { id: number, cantidad: number }[],
      public readonly idSesion: string
    ) {}
  }
  