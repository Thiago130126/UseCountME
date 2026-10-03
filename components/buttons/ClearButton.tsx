interface ClearButtonProps{
    onClear: () => void;
}

export default function ClearButton({onClear}: ClearButtonProps){

    return(
        <div>
            <button onClick={onClear}>Limpar texto</button>
        </div>
    );
}