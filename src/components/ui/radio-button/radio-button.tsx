import { CSSProperties, ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './radio-button.module.scss'

import { Typography } from '@/components/ui/typography'

type Props = {
  label?: string
  className?: string
  style?: CSSProperties
  disabled?: boolean
}

export const RadioButton = (
  props: Props & Omit<ComponentPropsWithoutRef<'input'>, keyof Props | 'type'>
) => {
  const { label, disabled, className, style, ...restProps } = props

  return (
    <label
      className={clsx(s.label, disabled ? s.disabled : undefined, className) || undefined}
      style={style}
    >
      <input type="radio" className={s.radio} disabled={disabled} {...restProps} />
      <Typography as="span" variant="body2">
        {label}
      </Typography>
    </label>
  )
}
