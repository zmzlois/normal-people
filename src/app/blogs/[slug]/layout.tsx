import React from 'react'

function layout({children, }:{children: React.ReactNode}) {
  return (
      <div className="container mx-auto prose dark:prose-invert">{children}</div>
  )
}

export default layout