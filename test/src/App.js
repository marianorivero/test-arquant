import { useEffect, useState } from 'react'
import Loading from './components/Loading/Loading'
import ShowInfo from './ShowInfo'
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
        {status ? people.map((person, index) => { return <ShowInfo key={index} person={person} deletePerson={deletePerson} /> }) : <Loading />}
    </>
}
export default App;