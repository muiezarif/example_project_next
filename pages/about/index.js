import React, {Component} from 'react';
import Head from "next/head";
import { NextSeo } from 'next-seo';
class about extends Component {
    render() {
        return (
            <div>
                <NextSeo
                    title="About Us"
                    description="Welcome to text nextjs SEO About us page."
                />
                About page
            </div>
        );
    }
}

export default about;