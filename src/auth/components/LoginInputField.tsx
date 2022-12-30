import React from 'react'
import ITransparentInputFieldProps from '../../utils/interfaces/ITransparentInputFieldProps'

const loginInputField = (props: ITransparentInputFieldProps): JSX.Element => {
  return (
        <div className="relative z-0 mb-6 w-full group">
            <input type={props.type} name={props.name}
                   onInput={(event) => {
                     props.handleChange(event)
                   }}
                   autoComplete={props.autoComplete}
                   id="floating_name"
                   className={`block py-2.5 px-0 w-full text-sm text-zinc-600 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer
                 border-gray-300 focus:border-green-300`}
                   placeholder=" " required/>

            <label htmlFor="floating_name"
                   className={`peer-focus:font-medium absolute text-sm
                  dark:text-gray-400 duration-300
                   transform -translate-y-7 scale-75 top-3
                    -z-10 origin-[0] peer-focus:left-0 
                    peer-placeholder-shown:scale-100
                     peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-green-300 text-gray-500`}>
                {props.label}
            </label>
        </div>
  )
}

export default loginInputField
