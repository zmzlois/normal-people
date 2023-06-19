import PreLayout from '@/components/layout/PreLayout';
import React from 'react'

function Page3() {

    return (
    <PreLayout href={"/pre/hate-aws/4"}>
            <h1 className="text-center flex justify-center text-8xl">Authentication</h1>
            <h3 className="text-center flex justify-center text-4xl text-red-300">Clerk - Implement user authentication in 10 minutes</h3>
            <h5 className="text-start flex justify-start text-xl text-red-50">Developer-first identity and user account management platform. Implement without requiring any backend code or customizations from SAML to Web3 Wallet.</h5>
            <table className="table-auto border-collapse border rounded-md border-green-800 m-4">
                
              <thead>
                  <tr className="text-4xl font-md">
                      <th className="border border-green-800 px-4 py-2">Items</th>
                      <th className="border border-green-800 px-4 py-2"><a href="https://clerk.com">Clerk</a></th>
                      <th className="border border-green-800 px-8 py-2">AWS AppSync</th>
                     <th className="border border-green-800 px-8 py-2">AWS Cognito</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className="border border-green-800 text-4xl">Implementation Time<br></br>(Mobile + Web App + <br/>Linking CI/CD to Github)</td>
                      <td className="border border-green-800 text-4xl px-4 text-orange-400">10 mins</td>
                      <td className="border border-green-800 text-3xl">5 days plus</td>
                      <td className="border border-green-800 text-3xl">5 days plus</td>
                  </tr>
                  <tr>
                      <td className="border border-green-800 text-4xl px-4 py-2">1000 User Active</td>
                      <td className="border border-green-800 text-4xl">Free</td>
                        <td className="border border-green-800 text-3xl">0.8USD</td>
                        <td className="border border-green-800 text-3xl">50.75</td>
                     
                  </tr>
                   <tr>
                      <td className="border border-green-800 text-3xl px-4 py-2">60 TB Global Data Transfer</td>
                      <td className="border border-green-800 text-4xl">Free</td>
                        <td className="border border-green-800 text-3xl">6,348.88USD</td>
                        <td className="border border-green-800 text-3xl">~200USD</td>
                  </tr>
                  
                  
              </tbody>
            </table>
      </PreLayout>
  )
}

export default Page3;