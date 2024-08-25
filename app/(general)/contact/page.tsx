import type { Metadata } from "next";


export const metadata:Metadata = {
 title: 'SEO Title',
 description: 'SEO description',
 keywords:['Contact Page','E-commerce Contact']
 
};

export default function ContactPage(){
    return(
        <>
            <span>Contact Page</span>
        </>
    )
}