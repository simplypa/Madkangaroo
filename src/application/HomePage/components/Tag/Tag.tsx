import { FC, useId } from 'react'

interface Props {
  name: string
}

const Tag: FC<Props> = ({ name }) => {
  const id = useId()

  return (
    <div className="bg-surface rounded py-2 px-3 my-3">
      <input type="checkbox" id={id} className="w-5 h-5 rounded align-middle accent-surface" />
      <label htmlFor={id} className="pl-2 text-on-background align-middle">
        {name}
      </label>
    </div>
  )
}

export default Tag
