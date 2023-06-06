import React, { useState } from 'react'
import UserPost from './endpoint/UserPost'

const Api = () => {

  const[userName,setUserName] = useState<string>("")
  const[userEmail,setUserEmail] = useState<string>("")
  const[userPassword,setUserPassword] = useState<string>("")

  const onSumitForm = () => {
    
  }

  return (
    <form method='POST' onSubmit={onSumitForm}>
      <h1>User Post</h1>
        <input 
          type="text" 
          value={userName} 
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)} 
        />
        <input 
          type="text" 
          value={userEmail} 
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setUserEmail(e.target.value)} 
        />
        <input 
          type="text" 
          value={userPassword} 
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setUserPassword(e.target.value)} 
        />
      <UserPost/>
    </form>
  )
}

export default Api