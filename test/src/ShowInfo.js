import './App.css'

function Show({index ,person, deletePerson}) {

    return <div key={index} className='container'>
        <h3>{person.name}</h3>
        <p>Gender: {person.gender}</p>
        <p>Height: {person.height}</p>
        <button onClick={() => deletePerson(person.name)} className='btn btn1'>  Eliminar  </button>
    </div>
}

export default Show;