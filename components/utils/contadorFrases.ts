export function ContadorFrases(texto: string): number{
    const arrayFrases = texto.trim().split(/[\.!?]+/);

    const frases = arrayFrases.filter(frase => (frase !== ' ' && frase !== ''));

    return frases.length;

}