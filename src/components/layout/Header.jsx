import { User, Calendar } from 'lucide-react'

export default function Header() {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const fechaFormato = tomorrow.toLocaleDateString('es-AR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">TourOps Iguazú</h1>
        <div className="flex items-center gap-2 text-sm text-slate-600 mt-1">
          <Calendar size={16} />
          <span>Operación para: {fechaFormato.charAt(0).toUpperCase() + fechaFormato.slice(1)}</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-medium text-slate-900">Federico Tubio</p>
          <p className="text-xs text-slate-600">Jefe de Operaciones</p>
        </div>
        <div className="bg-slate-900 text-white rounded-full p-3">
          <User size={20} />
        </div>
      </div>
    </div>
  )
}
