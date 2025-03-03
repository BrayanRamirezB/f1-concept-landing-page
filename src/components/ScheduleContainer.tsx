import { type Circuit } from '@/const/f1-info'

type scheduleContainerProps = {
  circuits: Circuit[]
}

const ScheduleContainer = ({ circuits }: scheduleContainerProps) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[repeat(3,1fr)] lg:grid-cols-[repeat(4,1fr)] lg:grid-rows-(repeat(6,auto)) gap-x-4 gap-y-6'>
      {circuits.map((circuit) => (
        <a
          key={circuit.id}
          href={`/circuit/${circuit.name.replaceAll(' ', '-').toLowerCase()}`}
          style={{
            backgroundImage: `url('/images/posters/${circuit.name
              .replaceAll(' ', '-')
              .toLowerCase()}.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          className='flex flex-col items-center justify-center text-neutral-100 rounded-lg overflow-hidden group transition duration-500 ease-in-out hover:-translate-y-2'
        >
          <div className='flex flex-col items-center justify-center gap-y-2 py-2 px-4 w-[250px] top-0 subpixel-antialiased bg-black/40 backdrop-blur backdrop-saturate-150 rounded-t-lg'>
            <div className='flex flex-row items-center justify-between w-full'>
              <h4 className='font-semibold text-lg text-[#f41d00]'>
                Ronda {circuit.id}
              </h4>
              <img
                src={circuit.countryFlag}
                alt={circuit.name}
                className='h-6 object-contain'
              />
            </div>
            <div className='h-[2px] w-full bg-gradient-to-r from-transparent via-neutral-100/60 to-transparent'></div>

            <h3 className='font-bold text-2xl'>{circuit.name}</h3>

            <div className='h-[2px] w-full bg-gradient-to-r from-transparent via-neutral-100/60 to-transparent'></div>

            <h4 className='font-medium text-md'>{circuit.generalDate}</h4>
          </div>

          <div className='transition-transform duration-700 ease-in-out translate-y-50 group-hover:translate-y-0 px-4 bg-black/40 w-[250px]'>
            <img
              src={circuit.circuitLogo}
              alt={circuit.name}
              className='h-40 object-contain'
            />
          </div>
        </a>
      ))}
    </div>
  )
}

export default ScheduleContainer
