import React,{useState} from 'react'
import { Checkbox } from '../../components/Checkbox'
import { SearchBar } from '../../components/searchBar'

import './Style.css'


export function Home() {
    const [movie,setMovie] = useState<string>('')
    
    const handleChangeText = (e:any) => {
        setMovie(e.target.value)
    }

    return (
        <div id="Home">
            <h1>Popular Movies</h1>
            <form action="">
                <label htmlFor="">
                    <SearchBar onChangeText={()=>{handleChangeText}} movie={movie}/>
                </label>
                <label htmlFor="">
                    <Checkbox/>
                </label>
            </form>
            
        </div>
    )
}
