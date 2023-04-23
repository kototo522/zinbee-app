import * as Dialog from '@radix-ui/react-dialog'
import { memo, useState } from 'react'
import type { GptMessagesProps } from '../types/GptMessagesProps'
import { Select, SelectItem } from './ui/select'

export const GptOption = memo(
  ({ setMessages }: Pick<GptMessagesProps, 'setMessages'>): JSX.Element => {
    const [request, setRequest] = useState<string>('')

    const handleClick = () => {
      setMessages((prev) => [...prev, { role: 'system', content: request }])
      setRequest('')
    }

    return (
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button>options</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className='inset-0 bg-black-100'/>
          <Dialog.Content className="fixed top-[50%] left-[50%] h-[80%] w-[90%] max-w-[350px] translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[6px] bg-white p-[24px]">
            <Dialog.Title  className="text-[24px] font-bold">設定</Dialog.Title>
            <input
              type="text"
              value={request}
              onChange={(e) => setRequest(e.target.value)}
            />
            <div className='font-black text-[24px]'>一般</div><div className="flex flex-col items-center w-full h-full space-y-5">
            <Select title="言語" value={request} setValue={setRequest}>
              <SelectItem value="japanese">日本語</SelectItem>
              <SelectItem value="english" />
            </Select>
            <Select title="文章を...?" value={request} setValue={setRequest}>
              <SelectItem value="文章を丁寧にしてください">
                丁寧にする
              </SelectItem>
              <SelectItem value="文章を要約してください">まとめる</SelectItem>
              <SelectItem value="文章を分かりやすく">
                わかりやすくする
              </SelectItem>
            </Select>
            <Dialog.Close asChild>
              <button onClick={handleClick} className='font-black border-b hover:opacity-25'>決定</button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <button className='font-black border-b hover:opacity-25'>close</button>
            </Dialog.Close></div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
  }
)
