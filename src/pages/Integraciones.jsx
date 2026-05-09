import { Lock, Clock, Zap, MapPin, Bell, Smartphone } from 'lucide-react'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Alert from '../components/ui/Alert'

const integraciones = [
  {
    id: 1,
    nombre: 'ERP / Motor de Reservas',
    descripcion: 'Sincronización automática de reservas desde tu sistema de gestión',
    estado: 'planificado',
    icon: Lock,
    impacto: 'Alto'
  },
  {
    id: 2,
    nombre: 'Google Maps / Waze',
    descripcion: 'Integración de tiempos reales de tráfico para optimizar rutas',
    estado: 'planificado',
    icon: MapPin,
    impacto: 'Alto'
  },
  {
    id: 3,
    nombre: 'App Mobile para Choferes',
    descripcion: 'Aplicación nativa para que choferes reciban asignaciones en tiempo real',
    estado: 'en-desarrollo',
    icon: Smartphone,
    impacto: 'Crítico'
  },
  {
    id: 4,
    nombre: 'Dashboard Real-Time',
    descripcion: 'Monitoreo en tiempo real de todos los servicios en operación',
    estado: 'planificado',
    icon: Zap,
    impacto: 'Medio'
  },
  {
    id: 5,
    nombre: 'Sistema de Notificaciones',
    descripcion: 'SMS/WhatsApp automático para clientes y choferes',
    estado: 'planificado',
    icon: Bell,
    impacto: 'Medio'
  },
  {
    id: 6,
    nombre: 'Historial de Tiempos',
    descripcion: 'Base de datos de tiempos reales para mejorar predicciones',
    estado: 'planificado',
    icon: Clock,
    impacto: 'Medio'
  }
]

const getEstadoColor = (estado) => {
  const colores = {
    'planificado': 'info',
    'en-desarrollo': 'warning',
    'completado': 'success'
  }
  return colores[estado]
}

const getEstadoTexto = (estado) => {
  const textos = {
    'planificado': 'Planificado',
    'en-desarrollo': 'En Desarrollo',
    'completado': 'Completado'
  }
  return textos[estado]
}

export default function Integraciones() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Integraciones Futuras</h1>
        <p className="text-slate-600 mt-2">Roadmap de funcionalidades planeadas</p>
      </div>

      <Alert variant="info" title="Hoja de Ruta">
        Estamos comprometidos con mejorar continuamente TourOps. Las integraciones listadas abajo están en diferentes etapas de desarrollo.
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {integraciones.map(integracion => {
          const Icon = integracion.icon
          return (
            <Card key={integracion.id} className="hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <Icon size={24} className="text-blue-600" />
                </div>
                <Badge variant={getEstadoColor(integracion.estado)}>
                  {getEstadoTexto(integracion.estado)}
                </Badge>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mb-2">{integracion.nombre}</h3>
              <p className="text-slate-600 text-sm mb-4">{integracion.descripcion}</p>

              <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
                <div>
                  <p className="text-xs text-slate-600">Impacto Operativo</p>
                  <Badge variant="primary" className="mt-1">{integracion.impacto}</Badge>
                </div>
                <Button variant="outline" size="sm" disabled>
                  Configurar
                </Button>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Timeline */}
      <Card className="border-l-4 border-l-blue-600">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Timeline Estimado</h3>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="w-0.5 h-12 bg-slate-200"></div>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Q2 2026</p>
              <p className="text-sm text-slate-600">App Mobile para Choferes (MVP)</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="w-0.5 h-12 bg-slate-200"></div>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Q3 2026</p>
              <p className="text-sm text-slate-600">Google Maps + Sistema de Notificaciones</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Q4 2026</p>
              <p className="text-sm text-slate-600">Dashboard Real-Time + Integraciones ERP</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Soporte */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
        <h3 className="text-lg font-semibold text-slate-900 mb-2">¿Necesitas una integración específica?</h3>
        <p className="text-slate-600 mb-4">
          Estamos siempre abiertos a sugerencias de nuestros usuarios. Contáctanos para discutir tus necesidades.
        </p>
        <Button size="sm">
          Solicitar Integración Personalizada
        </Button>
      </Card>
    </div>
  )
}
