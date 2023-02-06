import { NextPage } from 'next'
import SearchBlogsPage from '@/application/SearchBlogs'
import Layout from '@/application/Layout'
import Head from 'next/head'

const TAGS = [
  { tagName: 'Account', id: '1' },
  { tagName: 'Projects', id: '2' },
  { tagName: 'Teams', id: '3' },
]

const BLOGS = [
  { title: 'Blog 1', badge: 'Badge 1', time: 'Jan 7 2023', id: 1 },
  { title: 'Blog 2', badge: 'Badge 2', time: 'Jan 17 2023', id: 2 },
  { title: 'Blog 3', badge: 'Badge 3', time: 'Jan 27 2023', id: 3 },
]

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Blogs</title>
    </Head>
    <Layout>
      <SearchBlogsPage tags={TAGS} blogs={BLOGS} />
    </Layout>
  </>
)

export default HomePage
