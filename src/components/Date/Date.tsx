import DateFormat from '@/types/DateFormat'
import { format as dateFormat, parseISO } from 'date-fns'
import { FC } from 'react'

interface Props {
  children: string
  format?: string
  className?: string
}

const Date: FC<Props> = ({ children, format = DateFormat.Default, className = undefined }) => (
  <time dateTime={children} className={className}>
    {dateFormat(parseISO(children), format)}
  </time>
)

export default Date
