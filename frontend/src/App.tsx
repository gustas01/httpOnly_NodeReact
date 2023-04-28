import './App.css';

function App() {
  async function handleRequest(){
    // const response = await axios('http://localhost:3001', {
    //   method: 'POST',
    //   data: {name: 'Gustavo'},
    //   headers: {
    //   'Content-Type': 'application/json', 'Access-Control-Allow-Credentials': true, 'Access-Control-Allow-Origin': true},
    //   withCredentials: true,
    // })

    const response = await fetch('http://localhost:3001', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: 'Gustavo'}),
      credentials: 'include'
    })
    
    console.log(response);
    
    
  }

  return (
    <>
      <button onClick={handleRequest}>Fazer requisição</button>
    </>
  )
}

export default App
