import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase.config"


function ContadorGeral() {

    const [salas, setSalas] = useState([])
    const [qtdePontos, setQtdePontos] = useState(0)
    const [qtdeSalas, setQtdeSalas] = useState(0)

    useEffect(() => {
        async function carregarSalas() {
            const querySnapshot = await getDocs(collection(db, "salas"))
            const listaSalas = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setSalas(listaSalas)

            // calcular totais
            let totalPontos = 0
            listaSalas.forEach((sala) => {
                totalPontos += sala.pontos || 0
            })

            setQtdePontos(totalPontos)
            setQtdeSalas(listaSalas.length)
        }

        carregarSalas()
    }, [])

    return (
        <div className='bg-white z-[10] rounded-[10px] justify-center p-[25px] flex flex-col gap-[25px] border-light-gray border-[1px] w-[100%] xl:h-fit'>
            <div>
                <h1 className='text-gray-400 font-sora text-[10pt] font-light'>Número de Salas</h1>
                <p className='font-roboto text-[18pt]'>{qtdeSalas}</p>
            </div>
            <div className="w-fit">
                <h1 className='text-gray-400 font-sora text-[10pt] font-light'>Pontuação Global</h1>
                <p className='font-roboto text-[18pt]'>{qtdePontos} pontos</p>
            </div>
        </div>
    )
}

export default ContadorGeral