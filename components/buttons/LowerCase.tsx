interface LowerButtonProps{
    onSuccess: () => void;
}

export default function LowerButton({onSuccess}: LowerButtonProps){

    return(
        <div>
            <button onClick={onSuccess}>ToLower</button>
        </div>
    );
}