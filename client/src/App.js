import './App.css';
import Graph from './components/Graph';
import Form from './components/Form';

function App() {
  return (
    <div className="App bg-blue-custom" style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/blue-night-brick-wall-background_608189-366.jpg')",backgroundSize: 'cover' }}>
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-blue-500 bg-opacity-75 text-white rounded w-full money-tracker-font"> M O N E Y &nbsp; T R A C K E R</h1>
        
      
        {/* grid columns */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Chart */}
          <Graph></Graph>
          {/* Form */}
          <Form></Form>
        </div>
      </div>
    </div>
  );
}

export default App;
