import { useState } from "react";

function App() {
  const preguntas = [
    {
      pregunta: "¿Cuál es el planeta más cercano al Sol?",
      opciones: ["Mercurio", "Venus", "Tierra", "Marte"],
      respuesta: "Mercurio",
    },
    {
      pregunta: "¿Qué gas respiramos principalmente los humanos?",
      opciones: ["Oxígeno", "Hidrógeno", "Nitrógeno", "Dióxido de carbono"],
      respuesta: "Oxígeno",
    },
    {
      pregunta: "¿Quién pintó la Mona Lisa?",
      opciones: [
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Vincent van Gogh",
        "Miguel Ángel",
      ],
      respuesta: "Leonardo da Vinci",
    },
  ];

  const [indice, setIndice] = useState(0);
  const [puntos, setPuntos] = useState(0);
  const [respuesta, setRespuesta] = useState(null);

  const actual = preguntas[indice];

  function verificar(opcion) {
    setRespuesta(opcion);
    if (opcion === actual.respuesta) {
      setPuntos(puntos + 1);
    }
  }

  function siguiente() {
    setRespuesta(null);
    if (indice < preguntas.length - 1) {
      setIndice(indice + 1);
    } else {
      alert(`Juego terminado 🎉 Tu puntaje: ${puntos}/${preguntas.length}`);
      setIndice(0);
      setPuntos(0);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#1e1e1e",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          width: "400px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>🧠 Trivia App</h1>

        {/* Pregunta con color oscuro */}
        <h2 style={{ marginBottom: "20px", color: "#333" }}>{actual.pregunta}</h2>

        {actual.opciones.map((opcion, i) => (
          <button
            key={i}
            onClick={() => verificar(opcion)}
            style={{
              display: "block",
              width: "100%",
              padding: "12px",
              margin: "8px 0",
              borderRadius: "8px",
              border: "2px solid #ddd",
              cursor: "pointer",
              background:
                respuesta === opcion
                  ? opcion === actual.respuesta
                    ? "#4CAF50"
                    : "#F44336"
                  : "#f9f9f9",
              color: respuesta === opcion ? "#fff" : "#333",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            {opcion}
          </button>
        ))}

        <button
          onClick={siguiente}
          style={{
            marginTop: "20px",
            background: "#2196F3",
            color: "#fff",
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          ⏭ Siguiente
        </button>
        <p style={{ marginTop: "15px", color: "#555" }}>
          Puntos: {puntos}/{preguntas.length}
        </p>
      </div>
    </div>
  );
}

export default App;
