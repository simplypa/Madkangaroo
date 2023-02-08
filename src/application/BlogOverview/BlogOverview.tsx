import { FC, ReactNode } from 'react'
import Link from 'next/link'
import Avatar from '@/components/Avatar'

export interface Props {
  date: string
  title: string
  children: ReactNode
  avatar?: {
    src?: string | null
    alt: string
  }
}

const BlogOverview: FC<Props> = ({ date, title, children, avatar }) => (
  <Link href="/blogs/id">
    <div className="bg-background rounded-xl border p-4 mb-4">
      <div className="text-on-background text-sm">{date}</div>
      <h3 className="text-lg font-medium">{title}</h3>
      <div className="text-on-background">{children}</div>
      <div className="flex pt-4 justify-between ">
        <div className="mt-2.5 flex gap-2">{/* <Badge>{badge}</Badge> */}</div>
        <div className="mt-2.5">
          <Avatar width={28} height={28} alt={avatar?.alt} src={avatar?.src} />
        </div>
      </div>
    </div>
  </Link>
)

export default BlogOverview