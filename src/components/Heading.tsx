import type { ReactNode } from "react"

interface IHeading {
    children : ReactNode
    classname? : string
}

const Heading = ({children , classname} : IHeading) => {
    return(
        <h2 className={`${classname} relative text-center py-8 text-4xl text-[#03318C] after:content-[''] after:absolute after:right-1/2  after:bottom-0 after:border-2 after:border-[#55F229] after:w-24 after:rounded-md after:translate-x-1/2`}>
          {children}
        </h2>
    )
}
export default Heading