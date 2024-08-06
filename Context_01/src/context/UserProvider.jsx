import { createContext } from "react";
const UserContext = createContext(null)
const UserProvider=(props)=>{
const {children } = props
const user={
    fname:"shagufta",
    lname:"fatima",
    email:"shaguftafatima444@gmail.com",
    Course:"B.teech(cse)"
  }
  return(
    <>
       <UserContext.Provider value={user}>
        {children}
       </UserContext.Provider>
    </>
)
}
export {UserContext, UserProvider}