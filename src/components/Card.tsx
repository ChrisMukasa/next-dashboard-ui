import {ReactNode} from "react";

type Props = {
    children: ReactNode,
    className?: string
}
const Card = ({children, className}:Props) => {
  return (
      <div className={`bg-white rounded-2xl w-full h-full, ${className}`}>
          {children}
      </div>
  )
}

export default Card