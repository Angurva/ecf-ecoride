import React, {useContext} from 'react'
import { toast } from 'react-toastify';
import { UserContext } from '../../../../components/UserContext'
import { fetcherDELETE } from '../../../../lib/fetchers'

export default function DeleteCar({sendStateModal, stateModal,car}) {

    const {setStateCtx} = useContext(UserContext)

    async function handleSubmit(){

        try{
           
            console.log(car.id)
            const response = await fetcherDELETE(`http://127.0.0.1:8000/api/car/delete/${car.id}`)

            if (response)
            {
                sendStateModal(!stateModal)
                setStateCtx(true)
                toast.success("Suppression réussie")  
            }
            else{
                toast.error("La suppression a échoué ")
            }
        }
        catch(error)
        {
            console.log(error)
        }
    } 



  return (
    <form onSubmit={handleSubmit}>
        <div className="border-b border-gray-300 py-3 px-5 mb-4 flex justify-between items-center">
            <div className="flex flex-col">
                <p> Souhaitez-vous continuer la <span className="font-bold text-red-700 uppercase">suppression</span> du véhicule: </p>
                <p className="capitalize font-semibold text-xl">{car.brand},&nbsp;{car.model}&nbsp;</p>
                <p className="capitalize">immatriculé:&nbsp;<span className="font-bold">{car.registration}</span></p>
            </div>
           
        </div>
        <div className="flex justify-between">
            <button onClick={()=>{sendStateModal(!stateModal)}} className="border border-sky-600 text-sky-600 py-2 px-4 rounded-md">Annuler</button>
            <button type="submit" className="border border-sky-600 text-sky-600 py-2 px-4 rounded-md">Valider</button>
        </div>
        
    </form>
  )
}
