
const Button = ({imageUrl,myTitle,clickHandler})=>{
    return(
        <>
        <button title={myTitle} onClick={clickHandler}> 
            <img src={imageUrl} alt="btn-image" />
        </button>
        </>
    )
}

export default Button