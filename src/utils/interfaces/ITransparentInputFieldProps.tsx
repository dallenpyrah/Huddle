import React from 'react'

interface ITransparentInputFieldProps {
  label: string
  type: string
  name: string
  autoComplete: string
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void
}

export default ITransparentInputFieldProps
