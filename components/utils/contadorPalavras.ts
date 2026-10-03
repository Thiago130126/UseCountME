export function ContadorPalavras(texto: string): number{
    const arrayPalavras = texto.trim().split(' ');
    const palavras = arrayPalavras.filter(letra => letra !== ' ');
    const semEspacosVazios = palavras.filter(letra => letra !== '');

    return semEspacosVazios.length;
}