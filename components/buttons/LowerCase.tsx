import { useTranslations } from "use-intl";

interface LowerButtonProps{
    onSuccess: () => void;
}

export default function LowerButton({onSuccess}: LowerButtonProps){

    const t = useTranslations('Buttons');

    return(
        <div>
            <button onClick={onSuccess}> {t('ToLower')} </button>
        </div>
    );
}