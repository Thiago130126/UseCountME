interface UpperButtonProps{
    onSuccess: () => void;
}

export default function UpperButton({onSuccess}: UpperButtonProps){
    return(
        <div>
            <button onClick={onSuccess}>toUpper</button>
        </div>
    );
}