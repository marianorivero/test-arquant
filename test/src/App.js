import { useEffect, useState } from 'react'
import Loading from './Loading'
import './App.css'


function App() {

    const [people, setPeople] = useState([])
    const [status, setStatus] = useState(false)

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://swapi.dev/api/people/');
            const data = await response.json()
            setPeople(data.results);
            setStatus(true);
        };

        getData();
    }, [])


    function deletePerson(name) {
        setPeople(people.filter(person => person.name !== name))
    }


    return <>
        {status ?
            people.map( person => {
                return (
                    <div key={person.name} className='container'>
                        <h3>{person.name}</h3>
                        <p>Gender: {person.gender}</p>
                        <p>Height: {person.height}</p>
                        <button onClick={() => deletePerson(person.name)} className='btn btn1'>  Eliminar  </button>
                    </div>
                )
            }):<Loading/>
        }
    </>
}

export default App;

