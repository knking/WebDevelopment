
// function randomUser(){
//     fetch('https://randomuser.me/api/')
//     .then((response)=>response.json())
//     .then((data)=> console.log(data))
//     .catch((err)=>console.log(err)
//     )
// }
// export default randomUser

export  const randomUser = async ()=>{
    const response = await fetch('https://randomuser.me/api/')
    return  await response.json()
}


// async function randomUser() {
//     const response = await fetch('https://randomuser.me/api/')
//     return await response.json()
// }
// export default randomUser