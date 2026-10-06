import { useTranslations } from "next-intl";
import styles from "@/components/buttons/css/btns.module.css";

interface ClearButtonProps{
    onClear: () => void;
}

export default function ClearButton({onClear}: ClearButtonProps){

    const t = useTranslations('Buttons');

    return(
        <div className={styles.btn_secondary}>
            <button onClick={onClear}> {t('ClearButton')} </button>
        </div>
    );
}