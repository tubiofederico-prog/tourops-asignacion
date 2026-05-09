export function Table({ children, className = '' }) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full text-sm">
        {children}
      </table>
    </div>
  )
}

export function THead({ children }) {
  return (
    <thead className="bg-slate-100 border-b border-slate-200">
      {children}
    </thead>
  )
}

export function TBody({ children }) {
  return (
    <tbody className="divide-y divide-slate-200">
      {children}
    </tbody>
  )
}

export function Tr({ children, className = '' }) {
  return (
    <tr className={`hover:bg-slate-50 ${className}`}>
      {children}
    </tr>
  )
}

export function Th({ children, className = '' }) {
  return (
    <th className={`px-4 py-3 text-left font-semibold text-slate-900 ${className}`}>
      {children}
    </th>
  )
}

export function Td({ children, className = '' }) {
  return (
    <td className={`px-4 py-3 text-slate-700 ${className}`}>
      {children}
    </td>
  )
}
