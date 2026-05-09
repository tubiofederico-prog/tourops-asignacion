import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import {
  LayoutDashboard,
  Upload,
  Users,
  Truck,
  Settings,
  Zap,
  ClipboardList,
  RefreshCw,
  Power
} from 'lucide-react'

const menuItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/carga', icon: Upload, label: 'Carga Servicios' },
  { path: '/choferes', icon: Users, label: 'Choferes' },
  { path: '/vehiculos', icon: Truck, label: 'Vehículos' },
  { path: '/reglas', icon: Settings, label: 'Motor de Reglas' },
  { path: '/algoritmo', icon: Zap, label: 'Algoritmo' },
  { path: '/escala', icon: ClipboardList, label: 'Escala Operativa' },
  { path: '/mejora', icon: RefreshCw, label: 'Ajuste y Mejora' },
  { path: '/integraciones', icon: Power, label: 'Integraciones' }
]

export default function Sidebar() {
  const location = useLocation()

  return (
    <aside className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 overflow-y-auto pt-8">
      <nav className="space-y-2 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={clsx(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition duration-200',
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              )}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
