import PreLayout from '@/components/layout/PreLayout'
import React from 'react'

function Page1() {
  return (
      <PreLayout href={"/pre/hate-aws/3"}>
          <h1 className="text-center flex justify-center text-8xl">Database</h1>
          <h3 className="text-center flex justify-center text-4xl text-red-500">By AWS Cost Estimate and PlanetScale Pricing Plan</h3>
          <table className="table-auto border-collapse border rounded-md border-green-800 m-4">
              <thead>
                  <tr className="text-4xl font-md">
                      <th className="border border-green-800 px-4 py-2">Items</th>
                      <th className="border border-green-800 px-4 py-2">PlanetScale</th>
                      <th className="border border-green-800 px-8 py-2">AWS</th>
                     
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className="border border-green-800 text-4xl">Instance = 1</td>
                      <td className="border border-green-800 text-4xl text-orange-400">Free</td>
                      <td className="border border-green-800 text-3xl">151.36USD</td>
                      
                  </tr>
                  <tr>
                      <td className="border border-green-800 text-4xl px-4 py-2">Instance &gt; 1</td>
                      <td className="border border-green-800 text-4xl">29USD</td>
                      <td className="border border-green-800 text-3xl">542.64USD</td>
                     
                  </tr>
                   <tr>
                      <td className="border border-green-800 text-3xl px-4 py-2">100GB Storage + <br/>separate production/development branch</td>
                      <td className="border border-green-800 text-4xl">599USD</td>
                      <td className="border border-green-800 text-3xl">5271.58USD</td>
                  </tr>
                  <tr>
                      <td className="border border-green-800 text-3xl px-4 py-2">Enterprise<br/>(Managed Cloud and Custom R/W, more than 200GB)</td>
                      <td className="border border-green-800 text-4xl">2999USD</td>
                      <td className="border border-green-800 text-3xl px-3">&gt; 8,418USD</td>
                  </tr>
                  
              </tbody>
            </table>
        </PreLayout>
  )
}

export default Page1