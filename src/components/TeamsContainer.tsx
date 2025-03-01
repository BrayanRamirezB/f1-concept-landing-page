import { useState, type CSSProperties } from 'react'
import TeamLogoCard from '@/components/TeamLogoCard'
import { type Team } from '@/const/f1-info'

type teamsProps = {
  teams: Team[]
}

const TeamsContainer = ({ teams }: teamsProps) => {
  const [previewTeam, setPreviewTeam] = useState<Team>(teams[0])

  const bgCardChassisColor = [
    'bg-gradient-to-r from-[#01a0e8] via-[#01a0e8]/20 to-transparent',
    'bg-gradient-to-r from-[#239970] via-[#239970]/20 to-transparent',
    'bg-gradient-to-r from-[#e90021] via-[#e90021]/20 to-transparent',
    'bg-gradient-to-r from-[#b7bbbd] via-[#b7bbbd]/20 to-transparent',
    'bg-gradient-to-r from-[#53e253] via-[#53e253]/20 to-transparent',
    'bg-gradient-to-r from-[#fe8001] via-[#fe8001]/20 to-transparent',
    'bg-gradient-to-r from-[#26f4d3] via-[#26f4d3]/20 to-transparent',
    'bg-gradient-to-r from-[#062596] via-[#062596]/20 to-transparent',
    'bg-gradient-to-r from-[#3671c6] via-[#3671c6]/20 to-transparent',
    'bg-gradient-to-r from-[#1969db] via-[#1969db]/20 to-transparent'
  ]

  const logoPlacement = [
    'md:translate-x-62 lg:translate-x-68',
    'md:translate-x-56 lg:translate-x-62',
    'md:translate-x-62 lg:translate-x-68',
    'md:translate-x-70 lg:translate-x-74',
    'md:translate-x-72 lg:translate-x-78',
    'md:translate-x-62 lg:translate-x-68',
    'md:translate-x-70 lg:translate-x-76',
    'md:translate-x-68 lg:translate-x-74',
    'md:translate-x-48 lg:translate-x-54',
    'md:translate-x-66 lg:translate-x-74'
  ]

  return (
    <div className='grid grid-cols-[repeat(4,1fr)] grid-rows-[repeat(3,auto)] gap-4'>
      {teams.slice(0, 5).map((team, index) => (
        <TeamLogoCard
          key={team.id}
          team={team}
          index={index}
          onHover={() => setPreviewTeam(team)}
        />
      ))}

      <div className='flex flex-col items-center justify-center col-span-2'>
        <a
          key={previewTeam.id}
          href={`/team/${previewTeam.name.replaceAll(' ', '-').toLowerCase()}`}
          className='flex w-full animate-pulse-fade-in hover:scale-105 transition-transform duration-500 ease-in-out '
        >
          <div
            className={`flex rounded-l-3xl border-0 backdrop-blur-sm w-full h-22 ${
              bgCardChassisColor[previewTeam.id - 1]
            }`}
          >
            <div className='flex flex-col text-start pl-4 md:pl-6 py-4 md:py-2 text-neutral-200'>
              <h3 className='text-xl md:text-4xl font-bold'>
                {previewTeam.name}
              </h3>
              <h4 className='text-md md:text-xl font-medium'>
                {previewTeam.chassis}
              </h4>
            </div>
          </div>

          <div
            className={`absolute ${
              logoPlacement[previewTeam.id - 1]
            } md:-translate-y-8`}
          >
            <img
              src={previewTeam.logo}
              alt={previewTeam.name}
              className='h-0 md:h-20'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent blur-md'></div>
          </div>
          <img
            style={{ viewTransitionName: 'chassisImage' } as CSSProperties}
            src={previewTeam.chassisImage}
            alt={previewTeam.name}
            className='absolute h-8 translate-x-14 translate-y-14 md:h-20 md:translate-x-14 lg:translate-x-20 md:translate-y-8'
          />
        </a>
      </div>

      {teams.slice(5).map((team, index) => (
        <TeamLogoCard
          key={team.id}
          team={team}
          index={5 + index}
          onHover={() => setPreviewTeam(team)}
        />
      ))}
    </div>
  )
}

export default TeamsContainer
