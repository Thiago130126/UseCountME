import { useTranslations } from "next-intl";
import styles from "@/components/buttons/css/btns.module.css";

import {
  Eraser,      // limpar texto
} from "lucide-react";

interface ClearButtonProps{
    onClear: () => void;
}

export default function ClearButton({onClear}: ClearButtonProps){

    const t = useTranslations('Buttons');

    return(
        <div className={styles.btn_secondary}>
            <button onClick={onClear}> <Eraser size={20} /> {t('ClearButton')} </button>
        </div>
    );
}