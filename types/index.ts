import { MouseEventHandler } from 'react'

export interface CustomButtonProps {
  title: string
  btnType?: 'button' | 'submit'
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  textStyles?: string
  rightIcon?: string
  isDisabled?: boolean
}

export interface SearchManufacturePorps {
  manufacturer: string
  setManufacturer: (manufacturer: string) => void
}

export interface CarProps {
  city_mpg: number
  class: string
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string
  fuel_type: string
  highway_mpg: number
  make: string
  model: string
  transmission: string
  year: number
}

export interface HomeProps {
  searchParams: filterProps
}

export interface filterProps {
  manufacturer: string
  year: number
  fuel: string
  limit: number
  model: string
}

export interface CutsomFilterProps {
  title: string
  options: OptionProps[]
}

export interface OptionProps {
  title: string
  value: string
}

export interface ShowMoreProps {
  pageNumber: number
  isNext: boolean
}
