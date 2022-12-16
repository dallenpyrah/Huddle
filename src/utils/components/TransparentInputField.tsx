import React from 'react'
import ITransparentInputFieldProps from '../interfaces/ITransparentInputFieldProps'

const transparentInputField = (props: ITransparentInputFieldProps): JSX.Element => {
  return (
      <div className="relative z-0 mb-6 w-full group">
          <input type={props.type} name={props.name}
                 onChange={(event) => {
                   props.handleChange(event)
                 }}
                 autoComplete={props.autoComplete}
                 id="floating_name"
                 className={'block py-2.5 px-0 w-full text-sm text-zinc-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-300 peer'}
                 placeholder=" " required/>
          <label htmlFor="floating_name"
                 className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-300 peer-placeholder-shown:scale-100
                                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>{props.label}
          </label>
      </div>
  )
}

export default transparentInputField
