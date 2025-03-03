import { useState, type CSSProperties } from 'react'
import TeamLogoCard from '@/components/TeamLogoCard'
import { type Team } from '@/const/f1-info'

type teamsProps = {
  teams: Team[]
}

const TeamsContainer = ({ teams }: teamsProps) => {
  const [previewTeam, setPreviewTeam] = useState<Team>(teams[0])

  const bgCardChassisColor = [
    'bg-gradient-to-l from-[#01a0e8] via-[#01a0e8]/20 to-transparent',
    'bg-gradient-to-l from-[#239970] via-[#239970]/20 to-transparent',
    'bg-gradient-to-l from-[#e90021] via-[#e90021]/20 to-transparent',
    'bg-gradient-to-l from-[#b7bbbd] via-[#b7bbbd]/20 to-transparent',
    'bg-gradient-to-l from-[#53e253] via-[#53e253]/20 to-transparent',
    'bg-gradient-to-l from-[#fe8001] via-[#fe8001]/20 to-transparent',
    'bg-gradient-to-l from-[#26f4d3] via-[#26f4d3]/20 to-transparent',
    'bg-gradient-to-l from-[#062596] via-[#062596]/20 to-transparent',
    'bg-gradient-to-l from-[#3671c6] via-[#3671c6]/20 to-transparent',
    'bg-gradient-to-l from-[#1969db] via-[#1969db]/20 to-transparent'
  ]

  const logoPlacement = [
    '',
    'md:-translate-x-2 lg:translate-x-0',
    '',
    'translate-x-6',
    'md:translate-x-10 lg:translate-x-12',
    'translate-x-2',
    'translate-x-6',
    'md:translate-x-2 lg:translate-x-6',
    'md:translate-x-2 lg:translate-x-0',
    'md:translate-x-4 lg:translate-x-6'
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
            className={`flex rounded-r-3xl border-0 backdrop-blur-sm w-full h-22 items-center justify-end ${
              bgCardChassisColor[previewTeam.id - 1]
            }`}
          >
            <div className='flex flex-col text-end pr-4 text-neutral-200'>
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
            className='absolute h-14 translate-y-12 md:h-24 md:translate-y-6'
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
