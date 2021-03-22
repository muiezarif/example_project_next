import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { NextSeo } from 'next-seo';
export default function Home() {
  return (
    <div>
        <NextSeo
            title="Welcome next app"
            description="Welcome to text nextjs SEO."
            openGraph={{
             title:"Welcome next app",
             description:"Welcome to text nextjs SEO."
            }}
        />
    </div>
  )
}
