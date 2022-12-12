import React from 'react'
import ITransparentInputFieldProps from '../interfaces/ITransparentInputFieldProps'

const transparentInputField = (props: ITransparentInputFieldProps): JSX.Element => {
  const colorsDictionary = {
    borderRed300: 'border-red-300',
    borderGreen300: 'border-green-300',
    textGreen300: 'text-green-300',
    textRed300: 'text-red-300'
  }
  const [color, setColor] = React.useState(colorsDictionary.borderRed300)
  const [textColor, setTextColor] = React.useState(colorsDictionary.textRed300)

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    if (event.currentTarget.value.length > 0) {
      setColor(colorsDictionary.borderGreen300)
      setTextColor(colorsDictionary.textGreen300)
    } else {
      setColor(colorsDictionary.borderRed300)
      setTextColor(colorsDictionary.textRed300)
    }
  }

  return (
      <div className="relative z-0 mb-6 w-full group">
          <input type={props.type} name={props.name}
                 onChange={(event) => {
                   props.handleChange(event)
                   handleChange(event)
                 }}
                 autoComplete={props.autoComplete}
                 id="floating_name"
                 className={`block py-2.5 px-0 w-full text-sm text-zinc-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:${color} peer`}
                 placeholder=" " required/>
          <label htmlFor="floating_name"
                 className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:${textColor} peer-placeholder-shown:scale-100
                                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>{props.label}
          </label>
      </div>
  )
}

export default transparentInputField
