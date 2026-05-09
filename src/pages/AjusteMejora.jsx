import { useState } from 'react'
import { Send, TrendingUp } from 'lucide-react'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Alert from '../components/ui/Alert'
import { Table, THead, TBody, Tr, Th, Td } from '../components/ui/Table'

const ajustesHistorico = [
  {
    id: 1,
    fecha: '2026-05-08 14:32',
    operador: 'Federico Tubio',
    cambio: 'SRV003: Chofer cambiado Roberto Silva → Miguel Rodríguez',
    razon: 'Conflicto de horario detectado',
    regla_sugerida: 'Validar idiomas requeridos para excursiones internacionales'
  },
  {
    id: 2,
    fecha: '2026-05-08 14:25',
    operador: 'Federico Tubio',
    cambio: 'SRV008: Vehículo cambiado Sedan → Van 9p',
    razon: 'Capacidad insuficiente para grupo ampliado',
    regla_sugerida: 'Prever sobreventa de servicios semi-privados'
  },
  {
    id: 3,
    fecha: '2026-05-08 14:15',
    operador: 'Gerencia Operativa',
    cambio: 'SRV012: Chofer asignado Fernando García',
    razon: 'Cliente especial, requiere confirmación urgente',
    regla_sugerida: 'Crear categoría de servicios de prioridad ultra-alta'
  }
]

export default function AjusteMejora() {
  const [feedback, setFeedback] = useState('')

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Ajuste y Mejora</h1>
        <p className="text-slate-600 mt-2">Historial de correcciones y aprendizaje del algoritmo</p>
      </div>

      {/* Historial de ajustes */}
      <Card>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Historial de Ajustes Manuales</h2>
        <Table>
          <THead>
            <Tr>
              <Th>Fecha</Th>
              <Th>Operador</Th>
              <Th>Cambio Realizado</Th>
              <Th>Motivo</Th>
            </Tr>
          </THead>
          <TBody>
            {ajustesHistorico.map(ajuste => (
              <Tr key={ajuste.id}>
                <Td className="text-sm font-mono">{ajuste.fecha}</Td>
                <Td>{ajuste.operador}</Td>
                <Td className="text-sm">{ajuste.cambio}</Td>
                <Td>
                  <Badge variant="warning">{ajuste.razon}</Badge>
                </Td>
              </Tr>
            ))}
          </TBody>
        </Table>
      </Card>

      {/* Panel de aprendizaje */}
      <Card className="border-l-4 border-l-green-600">
        <div className="flex items-start gap-4">
          <TrendingUp size={28} className="text-green-600 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Aprendizaje del Algoritmo</h3>
            <p className="text-sm text-slate-600 mb-4">
              Basado en los ajustes manuales realizados, el sistema sugiere estas mejoras para futuras asignaciones:
            </p>
            <div className="space-y-2">
              {ajustesHistorico.map(ajuste => (
                <div key={ajuste.id} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <Badge variant="success">{ajuste.regla_sugerida}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <p className="text-sm text-slate-600">Total de Ajustes</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">{ajustesHistorico.length}</p>
          <p className="text-xs text-slate-500 mt-1">En los últimos 7 días</p>
        </Card>

        <Card>
          <p className="text-sm text-slate-600">Tasa de Precisión</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">92%</p>
          <p className="text-xs text-slate-500 mt-1">Sin ajustes requeridos</p>
        </Card>

        <Card>
          <p className="text-sm text-slate-600">Mejoras Sugeridas</p>
          <p className="text-3xl font-bold text-purple-600 mt-2">{ajustesHistorico.length}</p>
          <p className="text-xs text-slate-500 mt-1">Por implementar</p>
        </Card>
      </div>

      {/* Feedback del operador */}
      <Card>
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Enviar Feedback</h3>
        <p className="text-sm text-slate-600 mb-4">
          Tu retroalimentación nos ayuda a mejorar continuamente el algoritmo de asignación.
        </p>

        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Comparte tu experiencia con las asignaciones de hoy... ¿Qué funcionó bien? ¿Qué necesita mejora?"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
          rows={6}
        />

        <div className="mt-4 flex justify-end">
          <Button
            disabled={!feedback.trim()}
            onClick={() => {
              alert('Feedback enviado: ' + feedback)
              setFeedback('')
            }}
          >
            <Send size={16} className="mr-2" />
            Enviar Feedback
          </Button>
        </div>
      </Card>

      <Alert variant="info" title="Próximas mejoras">
        El equipo de desarrollo está implementando: mejor análisis de patrones de tráfico, integración con Google Maps para tiempos reales, y notificaciones automáticas a choferes.
      </Alert>
    </div>
  )
}
