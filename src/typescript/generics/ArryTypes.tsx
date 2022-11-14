import { result } from 'lodash'
import { stringify } from 'querystring'
import React, { useState } from 'react'
import { errorMonitor } from 'stream'
import { arrayBuffer } from 'stream/consumers'

export const ArryTypes: React.FC = () => {

  const [firstName, setFirstName] = useState<string>("");
  const [inputState, setInputState] = useState<{fullname: string | null}>({fullname:""});
  const [loggedIn, setLoggedIn] = useState<boolean>(true);

   const lengthOfArray = (arr: number[]) => {
    return  arr[arr.length -1]
  } 


   const result = lengthOfArray([1,2,3,4,5,6,7,8])

   const makeArr = <T, Y>(x:T, y: Y): [T, Y] => {
    return [x, y]
   }

   
   const useMakeArr = 
    makeArr(5, 6);
    makeArr("a", 5);
 
  const makeFullName = (obj: {firstName: string, lastName: string, age: number})=> {
    return {
      ...obj,
      age: 16,
      name: result,
      fullName: obj.firstName + ' ' + obj.lastName,
      
    }
  }
  const makeFullNameGeneric = <T extends {firstName: string, lastName: string} >(obj: T ) => {
    return {
      ...obj,
      age: 16,
      name: result,
      fullName: obj.firstName + ' ' + obj.lastName,
      
    }
  }

  const v4 = makeFullName({firstName: "bob", lastName:"junior", age:15})
  const v5 = makeFullNameGeneric({firstName: "bob", lastName:"junior", age:15, middleName: "tino"})

  console.log(v5)


  interface Tab<T> {
    id: string;
    position: number;
    data: T;
  }

  type NumberTag = Tab<number>
  type StringTab = Tab<string>

  return (
    <><div>{result}</div><div>{useMakeArr}</div>{}</>
  )
}


