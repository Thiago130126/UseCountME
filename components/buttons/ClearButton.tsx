import { useTranslations } from "next-intl";

interface ClearButtonProps{
    onClear: () => void;
}

export default function ClearButton({onClear}: ClearButtonProps){

    const t = useTranslations('Buttons');

    return(
        <div>
            <button onClick={onClear}> {t('ClearButton')} </button>
        </div>
    );
}