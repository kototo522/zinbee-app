import * as RadixSelect from '@radix-ui/react-select'
import {
  ComponentProps,
  Dispatch,
  ReactNode,
  SetStateAction,
  forwardRef,
} from 'react'
import { AiOutlineCheck, AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

type Props = {
  children: ReactNode
  title: string
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

type ItemProps = ComponentProps<typeof RadixSelect.Item> & {
  children?: ReactNode
}

export const Select = ({
  children,
  title,
  value,
  setValue,
}: Props): JSX.Element => {
  return (
    <RadixSelect.Root value={value} onValueChange={setValue}>
      <RadixSelect.Trigger asChild className='border-b hover:opacity-25'>
        <button>{title}</button>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className='z-10'>
          <RadixSelect.ScrollUpButton>
            <AiOutlineUp />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton>
            <AiOutlineDown />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}

export const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <RadixSelect.Item {...props} ref={forwardedRef}>
        <RadixSelect.ItemText>{children || props.value}</RadixSelect.ItemText>
        <RadixSelect.ItemIndicator>
          <AiOutlineCheck />
        </RadixSelect.ItemIndicator>
      </RadixSelect.Item>
    )
  }
)
