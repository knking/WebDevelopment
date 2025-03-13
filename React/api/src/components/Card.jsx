export const Card = ({img,name,gender,email}) => {
 return(
    <div className="my-card">
    <img src={img} alt="" />
    <p>Name:- {name}</p>
    <p>Gender:- {gender}</p>
    <p>Email:- {email}</p>
  </div>
 )
};
