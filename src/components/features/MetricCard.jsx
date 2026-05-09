import Card from '../ui/Card'
import { TrendingUp, TrendingDown } from 'lucide-react'

export default function MetricCard({
  title,
  value,
  subtitle,
  trend,
  icon: Icon,
  color = 'blue'
}) {
  const colors = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    red: 'text-red-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
    yellow: 'text-yellow-600'
  }

  return (
    <Card>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-slate-600 text-sm font-medium">{title}</p>
          <h3 className="text-3xl font-bold text-slate-900 mt-2">{value}</h3>
          {subtitle && <p className="text-xs text-slate-500 mt-1">{subtitle}</p>}
        </div>
        {Icon && (
          <div className={`${colors[color]} bg-slate-100 p-3 rounded-lg`}>
            <Icon size={24} />
          </div>
        )}
      </div>
      {trend && (
        <div className={`mt-4 flex items-center gap-1 text-sm ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
          {trend > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span>{trend > 0 ? '+' : ''}{trend}% vs período anterior</span>
        </div>
      )}
    </Card>
  )
}
