import React, { useState } from 'react'
import myquestions from './question'
import SingleQuestion from './SingleQuestion'
import '../scss/SingleQuestion.scss'

function AccordinMain() {
    let [questions,setQuestions]=useState(myquestions);

  return (
    <section className='accordins'>
        {questions.map((q)=>
        {
            return <SingleQuestion key={q.id} {...q}/>
        })}
    </section>
  )
}

export default AccordinMain