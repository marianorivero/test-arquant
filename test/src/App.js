import { useEffect, useState } from 'react'
import './App.css'


function App() {

    const [people, setPeople] = useState([])


    useEffect(() => {
        async function getData() {
            const response = await fetch('https://swapi.dev/api/people/');
            const data = await response.json()
            setPeople(data.results);
        }

        getData();
    }, [])


    function deletePerson(name) {
        setPeople(people.filter(person => person.name !== name))
    }


    return <>
        {
            people.map( person => {
                return (
                    <div key={person.name} className='container'>
                        <h3>{person.name}</h3>
                        <p>Gender: {person.gender}</p>
                        <p>Height: {person.height}</p>
                        <button onClick={() => deletePerson(person.name)} className='btn btn1'>  Eliminar  </button>
                    </div>
                )
            })
        }
    </>
}

export default App;