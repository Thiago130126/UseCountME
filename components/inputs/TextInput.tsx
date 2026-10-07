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
    const c = useTranslations("Home");

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

    return (
        <div className={styles.workbench}>
            {/* Editor de Texto */}
            <section className={styles.my_textarea}>
                <div className={styles.textarea_header}>
                    <h3>{inputT('h3')}</h3>
                    <span className={styles.live_badge}>
                        <span className={styles.pulse_dot}></span>
                        {c("contagem_vivo")}
                    </span>
                </div>
                <textarea 
                    className={styles.editor}
                    placeholder={inputT("placeholder")}
                    value={texto} 
                    onChange={TextManager}
                />
            </section>

            {/* Painel Lateral de Estatísticas e Botões */}
            <aside className={styles.controles}>
                <div className={styles.stats_card}>
                    <h4 className={styles.stats_title}>{c("estatisticas_texto")}</h4> {/* fazer tradução */}
                    
                    <div className={styles.stats_grid}>
                        <div className={styles.stat_item}>
                            <span className={styles.stat_label}>{inputT('Quantidades.palavras')}</span>
                            <span className={`stat-number ${styles.stat_value} ${styles.highlight_green}`}>
                                {ContadorPalavras(texto)}
                            </span>
                        </div>

                        <div className={styles.stat_item}>
                            <span className={styles.stat_label}>{inputT('Quantidades.caracteres')}</span>
                            <span className={`stat-number ${styles.stat_value} ${styles.highlight_cyan}`}>
                                {contadorCaracteres(texto)}
                            </span>
                        </div>

                        <div className={styles.stat_item}>
                            <span className={styles.stat_label}>{inputT('Quantidades.caracteres_sem_espaco')}</span>
                            <span className={`stat-number ${styles.stat_value} ${styles.highlight_cyan}`}>
                                {ContarSemEspacos(texto)}
                            </span>
                        </div>

                        <div className={styles.stat_item}>
                            <span className={styles.stat_label}>{inputT('Quantidades.frases')}</span>
                            <span className={`stat-number ${styles.stat_value} ${styles.no_highlight}`}>
                                {ContadorFrases(texto)}
                            </span>
                        </div>

                    </div>
                </div>

                <div className={styles.buttons}>
                    <UpperButton onSuccess={() => setTexto(texto.toUpperCase())} />
                    <LowerButton onSuccess={() => setTexto(texto.toLowerCase())} />
                    <div className={styles.case_buttons}>
                        <CopiarButton texto={texto} />
                        <ClearButton onClear={() => { setTexto(''); sessionStorage.removeItem('textoSalvo'); }} />
                    </div>
                </div>
            </aside>
        </div>
    );
}