import Layout from "../components/Layout"
import LoginPage from '../components/Login'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {



  return (
    <>
      <Layout title="Homepage Page">
     
      <LoginPage/>
       
      </Layout>
      
    </>
  )
}
