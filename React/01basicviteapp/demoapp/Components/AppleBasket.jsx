

function AppleBasket({appleCount,basketName}) {
  return (
    <div className="AppleBasket">

        <h1><span>{appleCount}</span>Apples</h1>
        <p>{basketName}{appleCount === 10 && '(Full)'} {appleCount === 0 && '(Empty)'}</p>
    </div>
  )
}

export default AppleBasket