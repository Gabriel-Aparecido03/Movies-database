import { FileSearch, MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import './style.css'

interface typesSearchBar {
    onChangeText:()=>void
    movie:string
}

export function SearchBar({onChangeText,movie}:typesSearchBar) {
    return ( 
        <div id='SearchBar'>
            <input 
                type="text" 
                onChange={()=>{onChangeText()}} 
                value={movie} 
                placeholder="Digite algum filme para pesquisar..."
            />
            <button><span><MagnifyingGlass /></span></button>
        </div>
    )
}