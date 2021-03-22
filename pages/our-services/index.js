import React from "react"
import Head from "next/head";
import { NextSeo } from 'next-seo';
export default function index() {
    return (<div>
        <NextSeo
            title="Our-Services"
            description="Welcome to text nextjs SEO page our services."
            openGraph={{
                title:"Our-Services",
                description:"Welcome to text nextjs SEO page our services."
            }}
        />
        Our Services
    </div>)
}