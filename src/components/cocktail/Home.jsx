import React from 'react'
import Cocktails from './Cocktails'
import SearchCocktail from './SearchCocktail'

function Home() {
  return (
    <>
        <SearchCocktail/>
        <hr />
        <Cocktails/>
    </>
  )
}

export default Home