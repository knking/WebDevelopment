
function Square({value, handleClick}){
    return(
        <div onClick={handleClick} style={{
            border:'1px solid black',
             width:"100%", height:'100px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
            } } 
            className="square" >
            <h3>{value}</h3>
        </div>
    )
}

export default Square