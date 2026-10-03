export function ContarSemEspacos(texto: string): number{
    const stringSemEspacos = texto.replaceAll(' ', '');

    return stringSemEspacos.length;
}