
const Button = ({imageUrl,myTitle})=>{
    return(
        <>
        <button title={myTitle}> 
            <img src={imageUrl} alt="btn-image" />
        </button>
        </>
    )
}

export default Button