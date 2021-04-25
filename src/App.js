
import "./App.css"
import Main from "./components/MainComponent"
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'

function App() {
  return (
      <div className="App">
        <Head>
        <title>Alex Lokoski</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Aleksandar Lokoski's personal web developer portfolio" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        </Head>
        <Main />
      </div>
  );
}

export default App;
