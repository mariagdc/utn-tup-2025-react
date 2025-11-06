import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import RecetaPage from './pages/receta'
import ObjectsPage from './pages/objects'
import RecetaDetallePage from './pages/recetaDetallePage'
import { RecetasProvider } from './contexts/RecetaContext' // Importa el Provider

function App() {
  return (
    <RecetasProvider> {/* Envuelve toda la aplicación con el Provider */}
      <Router>
        <div>
          <nav style={{ 
            padding: '20px', 
            borderBottom: '1px solid #ccc',
            marginBottom: '20px',
            backgroundColor: '#f5f5f5'
          }}>
            <Link 
              to="/objects" 
              style={{ 
                marginRight: '20px', 
                textDecoration: 'none',
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                borderRadius: '4px'
              }}
            >
              Objects
            </Link>
            <Link 
              to="/receta"
              style={{ 
                textDecoration: 'none',
                padding: '8px 16px',
                backgroundColor: '#28a745',
                color: 'white',
                borderRadius: '4px'
              }}
            >
              Receta
            </Link>
          </nav>
          
          <Routes>
            <Route path="/" element={<ObjectsPage />} />
            <Route path="/objects" element={<ObjectsPage />} />
            <Route path="/receta" element={<RecetaPage />} />
            <Route path="/recetaDetallePage/:id" element={<RecetaDetallePage />} />
          </Routes>
        </div>
      </Router>
    </RecetasProvider>
  )
}

export default App
