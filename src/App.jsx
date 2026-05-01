import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";

function App() {
  const [texto, setTexto] = useState("");
const [mensajes, setMensajes] = useState([]);
  const guardar = async () => {
    console.log("CLICK DETECTADO");

    try {
      await addDoc(collection(db, "prueba"), {
        texto: texto,
        fecha: new Date()
      });

      alert("Guardado en la nube 🚀");
    } catch (error) {
      console.error("ERROR:", error);
      alert("Error al guardar");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Prueba Firebase</h2>

      <input
        placeholder="Escribí algo"
        onChange={(e) => setTexto(e.target.value)}
      />

      <br /><br />

      <button onClick={guardar}>Guardar</button>
   <h3>Mensajes:</h3>

{mensajes.map((m) => (
  <p key={m.id}>{m.texto}</p>
))}</div>
  );
}
useEffect(() => {
  const unsubscribe = onSnapshot(collection(db, "prueba"), (snapshot) => {
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    setMensajes(data);
  });

  return () => unsubscribe();
}, []);
export default App;
