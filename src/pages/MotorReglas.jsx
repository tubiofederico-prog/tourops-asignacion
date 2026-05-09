import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import { reglas } from '../data/reglas'

const categorias = {
  'Capacidad de Vehículos': reglas.filter(r => r.categoria === 'Capacidad de Vehículos'),
  'Compatibilidad Servicio-Vehículo': reglas.filter(r => r.categoria === 'Compatibilidad Servicio-Vehículo'),
  'Tiempos Mínimos': reglas.filter(r => r.categoria === 'Tiempos Mínimos'),
  'Requisitos Especiales': reglas.filter(r => r.categoria === 'Requisitos Especiales'),
  'Frontera': reglas.filter(r => r.categoria === 'Frontera'),
  'Accesibilidad': reglas.filter(r => r.categoria === 'Accesibilidad'),
  'Restricciones Operativas': reglas.filter(r => r.categoria === 'Restricciones Operativas')
}

export default function MotorReglas() {
  const [expandidas, setExpandidas] = useState(Object.keys(categorias))
  const [reglasActivas, setReglasActivas] = useState(
    reglas.reduce((acc, r) => ({ ...acc, [r.id]: r.activa }), {})
  )

  const toggleCategoria = (cat) => {
    setExpandidas(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  const toggleRegla = (id) => {
    setReglasActivas(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const getPrioridadColor = (prioridad) => {
    const colors = {
      alta: 'error',
      media: 'warning',
      baja: 'info'
    }
    return colors[prioridad]
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Motor de Reglas Operativas</h1>
        <p className="text-slate-600 mt-2">Configura las reglas que el algoritmo tendrá en cuenta</p>
      </div>

      <div className="space-y-4">
        {Object.entries(categorias).map(([cat, reglasEnCat]) => (
          <Card key={cat}>
            <button
              onClick={() => toggleCategoria(cat)}
              className="w-full flex items-center justify-between p-4 -m-4 hover:bg-slate-50 rounded-lg transition"
            >
              <div className="flex items-center gap-3">
                {expandidas.includes(cat) ? (
                  <ChevronUp size={20} className="text-blue-600" />
                ) : (
                  <ChevronDown size={20} className="text-slate-400" />
                )}
                <h3 className="text-lg font-semibold text-slate-900">{cat}</h3>
                <Badge variant="info">{reglasEnCat.length}</Badge>
              </div>
            </button>

            {expandidas.includes(cat) && (
              <div className="border-t border-slate-200 pt-4 mt-4 space-y-4">
                {reglasEnCat.map(regla => (
                  <div key={regla.id} className="flex items-start justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-slate-900">{regla.nombre}</h4>
                        <Badge variant={getPrioridadColor(regla.prioridad)}>
                          {regla.prioridad}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600">{regla.descripcion}</p>
                    </div>

                    <button
                      onClick={() => toggleRegla(regla.id)}
                      className="ml-4 flex-shrink-0"
                    >
                      <div
                        className={`w-12 h-6 rounded-full transition ${
                          reglasActivas[regla.id]
                            ? 'bg-green-600'
                            : 'bg-slate-300'
                        }`}
                      >
                        <div
                          className={`h-6 w-6 rounded-full bg-white shadow-md transition transform ${
                            reglasActivas[regla.id] ? 'translate-x-6' : 'translate-x-0'
                          }`}
                        />
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          💡 <strong>Consejo:</strong> Todas las reglas de prioridad "alta" deben estar activas. Las reglas de prioridad "media" y "baja" pueden desactivarse si necesitas flexibilidad operativa.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-slate-600">
          {Object.values(reglasActivas).filter(Boolean).length} de {reglas.length} reglas activas
        </p>
        <div className="text-sm text-slate-600">
          Última actualización: {new Date().toLocaleTimeString('es-AR')}
        </div>
      </div>
    </div>
  )
}
