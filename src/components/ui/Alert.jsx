import clsx from 'clsx'
import { AlertCircle, CheckCircle, InfoIcon, AlertTriangle } from 'lucide-react'

export default function Alert({ variant = 'info', title, children, className = '' }) {
  const variants = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      icon: InfoIcon
    },
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      icon: CheckCircle
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      text: 'text-yellow-800',
      icon: AlertTriangle
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      icon: AlertCircle
    }
  }

  const config = variants[variant]
  const Icon = config.icon

  return (
    <div className={clsx(
      'p-4 rounded-lg border',
      config.bg,
      config.border,
      config.text,
      className
    )}>
      <div className="flex gap-3">
        <Icon size={20} className="flex-shrink-0 mt-0.5" />
        <div>
          {title && <h3 className="font-medium mb-1">{title}</h3>}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </div>
  )
}
