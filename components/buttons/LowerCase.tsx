import { useTranslations } from "next-intl";
import styles from "@/components/buttons/css/btns.module.css";

interface LowerButtonProps{
    onSuccess: () => void;
}

export default function LowerButton({onSuccess}: LowerButtonProps){

    const t = useTranslations('Buttons');

    return(
        <div className={styles.btn_primary}>
            <button onClick={onSuccess}> {t('ToLower')} </button>
        </div>
    );
}