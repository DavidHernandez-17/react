const Patient = ({patient}) => {
  
  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Mascota: {''}
        <span className="font-normal normal-case">{ patient.namePet }</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
        <span className="font-normal normal-case">{ patient.nameOwner }</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
        <span className="font-normal normal-case">{ patient.email }</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {''}
        <span className="font-normal normal-case">{ patient.date }</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
        <span className="font-normal normal-case">{ patient.symptoms }</span>
        </p>
    </div>
  )
}

export default Patient
