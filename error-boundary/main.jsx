import { Component, useState } from 'react';
import { createRoot } from 'react-dom/client';

function Rethrow({ error }) { throw error; }
function Broken() { throw new Error('original child error'); }

class Inner extends Component {
  state = { error: null };
  static getDerivedStateFromError(error) { return { error }; }
  render() { return this.state.error ? <Rethrow error={this.state.error} /> : this.props.children; }
}

class Outer extends Component {
  state = { error: null };
  static getDerivedStateFromError(error) { return { error }; }
  render() { return this.state.error ? <h1>Outer caught: {this.state.error.message}</h1> : this.props.children; }
}

function App() {
  const [broken, setBroken] = useState(false);
  return <Outer><Inner>
    <p>Expected after clicking: Outer caught: original child error</p>
    <button onClick={() => setBroken(true)}>Trigger error</button>
    {broken && <Broken />}
  </Inner></Outer>;
}

createRoot(document.getElementById('root')).render(<App />);
