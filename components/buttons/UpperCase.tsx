import { useTranslations } from "next-intl";
import styles from "@/components/buttons/css/btns.module.css";

interface UpperButtonProps{
    onSuccess: () => void;
}

export default function UpperButton({onSuccess}: UpperButtonProps){

    const t = useTranslations('Buttons');

    return(
        <div className={styles.btn_primary}>
            <button onClick={onSuccess}> {t('ToUpper')} </button>
        </div>
    );
}