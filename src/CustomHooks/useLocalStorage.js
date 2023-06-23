import React, { useEffect, useState } from 'react';

function getSavedValue(key,initilaValue){
  const savedVal=JSON.parse(localStorage.getItem(key));
  if(savedVal) return savedVal;

  if(initilaValue instanceof Function) return initilaValue();

  return initilaValue;
}

export default function useLocalStorage(key,initilaValue) {
    const [value,setValue]=useState(()=>{
      return getSavedValue(key,initilaValue)
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));
    },[value])
  return [value,setValue]
}
