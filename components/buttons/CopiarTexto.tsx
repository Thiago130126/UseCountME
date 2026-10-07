import { useTranslations } from "next-intl";
import { toast } from "sonner";
import styles from "@/components/buttons/css/btns.module.css";

interface CopiarButtonProps{
    texto: string;
}

import {
  Copy,        // copiar texto
} from "lucide-react";

export default function CopiarButton({texto}: CopiarButtonProps){

    const buttonsT = useTranslations('Buttons');
    const ToastsT = useTranslations('Toasts');

    const Copiar = async () => {
        try{
            if (texto === ''){
                toast.message(ToastsT('CopyButton.Message'));
            }else{
                await navigator.clipboard.writeText(texto);
                toast.success(ToastsT('CopyButton.Success'));
            }
            

        }catch(err){
            console.log('Falha ao copiar para a área de trasferência: ', err);
            toast.error(ToastsT('CopyButton.Error'));
        }
    }

    return(
        <div className={styles.btn_secondary}>
            <button onClick={Copiar}> <Copy size={20} /> {buttonsT('CopyButton')} </button>
        </div>
    );
}