

function AppleBasket({appleCount,basketName}) {
  return (
    <div className="AppleBasket">

        <h1><span>{appleCount}</span>Apples</h1>
        <p>{basketName}</p>
    </div>
  )
}

export default AppleBasket