import Counter from "./components/Counter";
import "./App.css";
import Layout from "./components/layout/Layout";
import { useEffect, useState } from "react";
import { useGeoLocation } from "./Hooks/useLocation";

function App() {
  const [data, setData] = useState([]);
  const { lat, long } = useGeoLocation();
  // const [counter, setCounter] = useState(5);
  useEffect(() => {
    fetch(`https://api-adresse.data.gouv.fr/reverse/?lon=${long}&lat=${lat}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [lat, long]);
  console.log('data', data)
  return (
    <>
      <Layout>
        <main>
        </main>
      </Layout>

    </>
  );
}

export default App;
