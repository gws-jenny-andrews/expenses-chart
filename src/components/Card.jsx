
const Card = ({children, ...rest}) => {
  return (
    <div className={`card ${rest.className}`}>
        {children}
    </div>
  )
}

export default Card