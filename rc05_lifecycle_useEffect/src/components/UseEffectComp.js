import React, { useState, useEffect } from 'react'

const UseEffectComp = () => {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(4)

  useEffect(() => {
    console.log('UseEffect!')
    // count !== 0 && alert(`new notification, total: ${count}`)
    let timer= setTimeout(() =>{
      alert("timer")
    }, 3000)
    return () => {
      console.log('Functional Component Unmounted')
      clearTimeout(timer)
    } //! clean up function
  }, [])

  console.log('Func Comp Rendered!')
  const increase = () => setCount(count + 1)
  const increaseAge = () => setAge(age + 1)

  return (
    <div className="function">
      <h2>Functional Component</h2>
      <p>Count: {count} </p>
      <button onClick={increase}>Increase Count</button>
      <p>Age: {age} </p>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  )
}

export default UseEffectComp