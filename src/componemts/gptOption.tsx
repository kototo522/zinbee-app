import * as Dialog from '@radix-ui/react-dialog'
import { Select, SelectItem } from './ui/select'
import { memo, useState } from 'react'
import type { GptMessagesProps } from '../types/GptMessagesProps'

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
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Title>設定</Dialog.Title>
            <input
              type="text"
              value={request}
              onChange={(e) => setRequest(e.target.value)}
            />
            <div>一般</div>
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
              <button onClick={handleClick}>決定</button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <button>close</button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
  }
)
