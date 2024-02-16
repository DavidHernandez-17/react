const AlertDanger = ({ message }) => {
  return (
    <div className='bg-red-800 text-white font-bold uppercase rounded-md p-2 text-center mb-2'>
        <p>{ message }</p>
    </div>
  )
}

export default AlertDanger
