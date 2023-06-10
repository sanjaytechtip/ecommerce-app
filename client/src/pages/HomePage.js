import React, {useContext} from 'react'
import Layout from '../components/Layout/Layout'
//import { authContext } from '../context/auth'
const HomePage = () => {
  //console.log(authContext)
  //const { setAuthData } = useContext(authContext)
  //console.log(setAuthData)
  //const { auth } = useContext(authContext);
  return (
    <Layout title={"Home - Ecommerce App"}>
        <h1>Home Page</h1>
        {/* <pre>{JSON.stringify(auth.data)}</pre> */}
    </Layout>
  )
}

export default HomePage
