'use client';
import { useEffect, useState } from "react";
import { contadorCaracteres } from "../utils/contadorCaracteres";
import { ContadorPalavras } from "../utils/contadorPalavras";
import { ContadorFrases } from "../utils/contadorFrases";
import { toast } from "sonner";
import ClearButton from "../buttons/ClearButton";
import CopiarButton from "../buttons/CopiarTexto";
import { ContarSemEspacos } from "../utils/contadorCaracteresSemEspacoes";
import LowerButton from "../buttons/LowerCase";
import UpperButton from "../buttons/UpperCase";

export default function TextInput(){
    const [texto, setTexto] = useState('');

    const TextManager = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
        setTexto(event.target.value);
        sessionStorage.setItem('textoSalvo', event.target.value);
    }

    useEffect(() => {
        function AcessarSessionStorage(){
            try{
                const textoSalvo = sessionStorage.getItem('textoSalvo');
                if(textoSalvo !== null){
                    setTexto(textoSalvo);
                }
            }catch(error){
                console.log('Falha ao tentar acessar o Session Storage: ', error);
                toast.error('Falha interna do servidor');
            }
        }

        AcessarSessionStorage();
    }, []);

    return(
        <div>
            <h3>Digite seu texto:</h3>
            <textarea style={{width: '200px', height: '200px', backgroundColor: 'lightgrey'}} value={texto} onChange={TextManager}>
            </textarea>
            <p>Quantidade de caracteres com espaço: <strong>{contadorCaracteres(texto)}</strong></p>
            <p>Quantidade de caracteres sem espaço: <strong>{ContarSemEspacos(texto)}</strong></p>
            <p>Quantidade de palavras: <strong> {ContadorPalavras(texto)} </strong></p>
            <p>Quantidade de frases: <strong> {ContadorFrases(texto)} </strong></p>
            <div>
                <ClearButton onClear={() => setTexto('')}/>
                <CopiarButton texto={texto}/>
                <LowerButton onSuccess={() => setTexto(texto.toLowerCase())}/>
                <UpperButton onSuccess={() => setTexto(texto.toUpperCase())}/>
            </div>
        </div>
    );
}