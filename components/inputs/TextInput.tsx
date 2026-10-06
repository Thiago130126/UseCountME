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
import { useTranslations } from "next-intl";
import styles from "@/components/inputs/css/TextInput.module.css";

export default function TextInput(){
    const [texto, setTexto] = useState('');

    const t = useTranslations('Toasts.TextInput');
    const inputT = useTranslations('TextInput');

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
                toast.error(t('Error'));
            }
        }

        AcessarSessionStorage();
    }, [t]);

    return(
        <div className={styles.workbench}>
            <section className={styles.my_textarea}>
                <h3>{inputT('h3')}</h3>
                <textarea style={{width: '200px', height: '200px', backgroundColor: 'lightgrey'}} value={texto} onChange={TextManager}>
                </textarea>
            </section>

            <div className={styles.controles}>
                <div className={styles.estatisticas}>
                    <p>{inputT('Quantidades.caracteres')} <strong>{contadorCaracteres(texto)}</strong></p>
                    <p>{inputT('Quantidades.caracteres_sem_espaco')} <strong>{ContarSemEspacos(texto)}</strong></p>
                    <p>{inputT('Quantidades.palavras')} <strong> {ContadorPalavras(texto)} </strong></p>
                    <p>{inputT('Quantidades.frases')} <strong> {ContadorFrases(texto)} </strong></p>
                </div>
                <div className={styles.buttons}>
                    <div className={`${styles.primary} ${styles.btn_lower}`}>
                        <LowerButton onSuccess={() => setTexto(texto.toLowerCase())}/>
                    </div>
                    <div className={`${styles.primary} ${styles.btn_upper}`}>
                        <UpperButton onSuccess={() => setTexto(texto.toUpperCase())}/>
                    </div>
                    <ClearButton className={styles.btn_clear} onClear={() => {setTexto(''); sessionStorage.removeItem('textoSalvo') }}/>
                    <CopiarButton className={styles.btn_copy} texto={texto}/>

                </div>
            </div>
        </div>
    );
}