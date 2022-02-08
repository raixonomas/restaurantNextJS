import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ReactDom from 'react-dom'

import Header from './component/header'

export default function Home() {
  return (
    <>
      <Header />
      <div>Hello World</div>
    </>
  )
}
