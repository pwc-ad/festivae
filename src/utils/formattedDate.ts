import { DATE_UTC } from "../lib/constants"
 
export const formattedDate = ({ withTime }: { withTime?:boolean } = {}) => {
  const date = DATE_UTC.toLocaleDateString('es-AR', 
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'utc',
      hour: withTime ? 'numeric' : undefined,
      minute: withTime ? 'numeric' : undefined,
      hour12: false,
    }
  )

  return withTime ? `${date} hs.` : date;
}