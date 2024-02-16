import Patient from "./Patient"

const PatientList = ({ patients }) => {
  patients.map((patient)=>{
    console.log(patient.namePet)
  })

  return (
    <div className="md:w-1/2 lg:w-3/5">
        <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
        <p className="text-xl mt-5 text-center">
          Administra tus {''}
          <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>
        <div className="md:h-screen overflow-y-scroll">
          {
            patients.map( patient => (
              <Patient
                key={patient.id}
                patient={patient}
              />
            ))
          }
        </div>
    </div>
  )
}

export default PatientList
