
import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/countries'

const countriesApi = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {

  return (
    <>
    <Suspense fallback = {<h2>Countries are loading</h2>}>
      <Countries countriesApi={countriesApi}></Countries>
      </Suspense>
    </>
  )
}

export default App
