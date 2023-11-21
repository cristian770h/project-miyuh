export class CreateComentarioDto{
    readonly Id_User_Id: number; // Suponiendo que este es el ID del usuario
    readonly Opinion: string;  // El contenido del comentario
    readonly Id_Noticia_Id: number; // Suponiendo que este es el ID de la noticia

}