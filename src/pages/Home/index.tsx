import { Button, CharacterCard, CharacterCardSkeleton, CharacterSelector } from '@/components';
import { useAgents } from '@/hooks/useAgents'
import { useHome } from '@/hooks/useHome';

export default function Home() {
  const { handleAgentFilter, roles, agents, isLoading, filteredAgents } = useAgents();
  const { canvasRef } = useHome();
  const skeletons = Array.from({ length: 10 });

  return (
    <div className="text-white relative">
      <div className=" absolute inset-0 rounded-xl overflow-hidden z-0 " style={{ height: 'calc(100vh - 56px)' }}>
        <img
          src="https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png"
          alt="Fondo"
          className="fixed inset-0 object-cover opacity-10 w-full h-full"
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
      <div className="flex flex-col lg:space-y-10 lg:pt-10  md:space-y-5 md:pt-5  space-y-3 pt-3 justify-between py-5" style={{ height: 'calc(100vh - 55px)' }}>
        <div className="flex flex-col gap-5 lg:px-10 md:px-6 px-3">
          <div className="flex flex-row overflow-x-auto">
            <h2 className="md:text-3xl text-xl font-bold">Agents</h2>
          </div>
          <div className="flex flex-row overflow-x-auto gap-5">
            {
              isLoading ?
                skeletons.map((_, index) => (
                  <CharacterCardSkeleton key={index} />
                ))
                :
                agents?.filter(agent => agent.isPlayableCharacter)
                  .map(agent => <CharacterCard agent={agent} key={agent.uuid} />)
            }
          </div>
        </div>
        <div className="grid custom-md:grid-cols-6 grid-cols-1  lg:px-10 md:px-6 px-3 gap-2 z-30">
          <div className="custom-md:col-span-2 py-2 custom-md:text-left text-center flex flex-col justify-between gap-5">
            <h3 className='text-2xl'>Agent Meta</h3>
            <p className='text-gray-400'>Usage is determined by Pick Rate, which is the percentage of games an agent is picked by any player.</p>
            <Button color={"#4f52af"} text='See guides' onClick={() => handleAgentFilter('role', roles[0])} />
          </div>
          <div className="custom-md:col-span-3 custom-md:col-start-4 grid grid-cols-2 ">
            {
              filteredAgents.map(agent => <CharacterSelector agent={agent} key={agent.uuid} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}