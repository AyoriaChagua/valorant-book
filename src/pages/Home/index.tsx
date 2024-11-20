import { CharacterCard } from '@/components';
import CharacterCardSkeleton from '@/components/UI/CharacterCardSkeleton';
import { useAgents } from '@/hooks/useAgents'
import { useHome } from '@/hooks/useHome';

export default function Home() {
  const { handleAgentFilter, roles, filteredAgents, isLoading } = useAgents();
  const { canvasRef } = useHome();
  const skeletons = Array.from({ length: 10 });

  return (
    <div className="text-white relative">
      <div className=" absolute inset-0 rounded-xl overflow-hidden z-0" style={{ height: 'calc(100vh - 56px)' }}>
        <img
          src="https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png"
          alt="Fondo"
          className="object-cover opacity-10 w-full h-full"
        />
        <canvas
          ref={canvasRef}
          className="absolute bottom-0 right-0 pointer-events-none"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute'
          }}
        />
      </div>
      <div className="flex flex-col lg:space-y-10 lg:pt-10  md:space-y-5 md:pt-5  space-y-3 pt-3" style={{ height: 'calc(100vh - 55px)' }}>
        <div className="flex flex-row overflow-x-auto gap-5 lg:px-10 md:px-6 px-3">
          <h2 className="md:text-3xl text-xl font-bold">Agents</h2>
        </div>
        <div className="flex flex-row overflow-x-auto gap-5 lg:px-10 md:px-6 px-3">
          {
            isLoading ?
              skeletons.map((_, index) => (
                <CharacterCardSkeleton key={index} />
              ))
              :
              filteredAgents?.filter(agent => agent.isPlayableCharacter)
                .map(agent => <CharacterCard agent={agent} key={agent.uuid} />)
          }
        </div>
        <div className="flex flex-row justify-between lg:px-10 md:px-6 px-3">
          <div className="p-16 "></div>
          <div className="p-16  z-20">
            <div className="w-96"></div>
          </div>
        </div>
      </div>
    </div>
  )
}