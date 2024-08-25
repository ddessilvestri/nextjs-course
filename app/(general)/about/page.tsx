import type { Metadata } from "next";


export const metadata:Metadata = {
 title: 'SEO Title',
 description: 'SEO description',
 keywords:['About Page','E-commerce about']
 
};

export default function AboutPage(){
    return(
        <>
            <span>About Page</span>
        </>
    )
}