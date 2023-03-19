const Header = (course)=>{
  return(
    <div>
      {course.name}
    </div>
  )
}
const Total = (exercise) => {
  return (
    <div>
      Number of exerises {exercise.one + exercise.two + exercise.three}
    </div>
  )
}
const Part = (part) => {
  return (
    <div>
      <p>{part.one} {part.two}</p>
      <p>{part.three} {part.four}</p>
      <p>{part.five} {part.six}</p>
    </div>
  )
}
const Content = (prop) => {
  return (
    <div>
      <Part one={prop.one} two={prop.two}></Part>
      <Part three={prop.three} four={prop.four}></Part>
      <Part five={prop.five} six={prop.six}></Part>
    </div>
    )
}
const App = () => {
    // const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React' 
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    return (
      <div>
        <Header name='course' />
        <Content one={part1} two={exercises1} three={part2} four={exercises2} five={part3} six={exercises3}> </Content>
        <Total one={exercises1} two={exercises2} three={exercises3}/>
      </div>
      )
}
export default App