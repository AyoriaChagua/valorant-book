import { Agent } from '@/lib/types'

interface Props {
    readonly agent: Agent
}

export default function CharacterSelector({ agent }: Props) {
    return (
        <div className='h-16 w-16  p-1 flex-shrink-0'>
            <img src={agent.displayIcon} alt={agent.displayName}  className='h-full w-full object-contain ' />
        </div>
    )
}
