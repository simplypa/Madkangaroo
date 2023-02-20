import { FC } from 'react'
import useSWR from 'swr'
import Blog from '@/types/Blog'
import { useRouter } from 'next/router'
import Info from './components/Info'
import LatestBlogHighlight from './components/LatestBlogHighlight'

const User: FC = () => {
  const router = useRouter()
  const { id: blogId } = router.query

  const {
    data: { userId },
  } = useSWR(`/api/blog/${blogId}`)

  const { data: blogs } = useSWR(`/api/blogs?userId=${userId}&perPage=2`)

  if (!blogs) return null

  return (
    <div className="border-l pl-9 w-[260px]">
      <div className="text-on-background text-xs mb-3">Posted by</div>
      <Info name={blogs[0].user.name} image={blogs[0].user.image} />

      <div className="text-xs text-on-background mb-3">Latest blogs</div>
      {blogs.map(({ id, title, updatedAt }: Blog) => (
        <LatestBlogHighlight key={id} title={title} updatedAt={updatedAt} id={id} />
      ))}
    </div>
  )
}

export default User
