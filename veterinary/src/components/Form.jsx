import {useState} from 'react'
import AlertDanger from './AlertDanger'

const Form = ({ patients, setPatients }) => {
    const [namePet, setName] = useState('')
    const [nameOwner, setOwner] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [symptoms, setSymptoms] = useState('')

    const [error, setError] = useState(false)

    const generateId = () => {
        const random = Math.random().toString(36).substr(2)
        const date = Date.now().toString(36)

        return random + date
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // validación formulario
        if ( [ namePet, nameOwner, email, date, symptoms ].includes('') ) {
            setError(true)
            return
        }

        setError(false)

        const patientObject = {
            id: generateId(),
            namePet,
            nameOwner,
            email,
            date,
            symptoms
        }

        setPatients([...patients, patientObject])
        cleanForm()
    }

    const cleanForm = () => {
        setName('')
        setOwner('')
        setEmail('')
        setDate('')
        setSymptoms('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
            <p className="text-lg mt-5 text-center mb-5">
                Añade pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            <form
                onSubmit={ (e) => handleSubmit(e) }
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                { error && <AlertDanger message="Todos los campos son obligatorios"/>}
                <div className="mb-5">
                    <label
                        htmlFor="mascota"
                        className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text" 
                        placeholder="Nombre mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={ namePet }
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="propietario"
                        className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario"
                        type="text" 
                        placeholder="Nombre propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={ nameOwner }
                        onChange={ (e) => setOwner(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 uppercase font-bold">
                        Correo electrónico
                    </label>
                    <input
                        id="email"
                        type="email" 
                        placeholder="Email contacto propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="alta"
                        className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={ date }
                        onChange={ (e) => setDate(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="sintomas"
                        className="block text-gray-700 uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los síntomas"
                        value={ symptoms }
                        onChange={ (e) => setSymptoms(e.target.value) }
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value="Agregar Paciente"
                />
            </form>
        </div>
    )
}

export default Form
