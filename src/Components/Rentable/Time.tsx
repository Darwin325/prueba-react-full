import { useEffect, useRef } from "react"

interface ITime {
   nameList: string
   max?: string
   min?: string
   handleTime?: (e: React.ChangeEvent<HTMLInputElement>) => void
   name: string
   value?: string
}

export default function Time({ nameList, max, min, handleTime, name }: ITime) {
   return (
      <>
         <input
            type="time"
            list={nameList}
            onChange={handleTime}
            name={name}
            max={max}
            min={min}
         />
         <datalist id={nameList}>
            <option value="01:00"></option>
            <option value="02:00"></option>
            <option value="03:00"></option>
            <option value="04:00"></option>
            <option value="05:00"></option>
            <option value="06:00"></option>
            <option value="07:00"></option>
            <option value="08:00"></option>
            <option value="09:00"></option>
            <option value="10:00"></option>
            <option value="11:00"></option>
            <option value="12:00"></option>
            <option value="13:00"></option>
            <option value="14:00"></option>
            <option value="15:00"></option>
            <option value="16:00"></option>
            <option value="17:00"></option>
            <option value="18:00"></option>
            <option value="19:00"></option>
            <option value="20:00"></option>
            <option value="21:00"></option>
            <option value="22:00"></option>
            <option value="23:00"></option>
            <option value="24:00"></option>
         </datalist>
      </>
   )
}
