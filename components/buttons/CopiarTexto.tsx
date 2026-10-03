import { toast } from "sonner";

interface CopiarButtonProps{
    texto: string;
}

export default function CopiarButton({texto}: CopiarButtonProps){

    const Copiar = async () => {
        try{
            if (texto === ''){
                toast.message('Não há texto para ser copiado')
            }else{
                await navigator.clipboard.writeText(texto);
                toast.success('Copiado para a área de transferência');
            }
            

        }catch(err){
            console.log('Falha ao copiar para a área de trasferência: ', err);
            toast.error('Falha ao copiar para a área de trasferência');
        }
    }

    return(
        <div>
            <button onClick={Copiar}>Copiar Texto</button>
        </div>
    );
}