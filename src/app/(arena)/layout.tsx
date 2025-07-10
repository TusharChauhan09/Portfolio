import React from 'react'

import Navbar from '@/components/Nav/Navbar';
import Footer from '@/components/Layout/Footer';

interface ChildrenProps {
  children: React.ReactNode
}

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <Navbar/>
      <div className="container mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-5 md:px-16">
        {children}
      </div>
        <Footer />
    </>
  )
}