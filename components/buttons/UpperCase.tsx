import { useTranslations } from "next-intl";

interface UpperButtonProps{
    onSuccess: () => void;
}

export default function UpperButton({onSuccess}: UpperButtonProps){

    const t = useTranslations('Buttons');

    return(
        <div>
            <button onClick={onSuccess}> {t('ToUpper')} </button>
        </div>
    );
}