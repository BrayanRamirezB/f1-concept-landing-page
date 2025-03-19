import { type Driver } from '@/const/f1-info'

type podiumProps = {
  podium: Pick<
    Driver,
    | 'id'
    | 'name'
    | 'fullName'
    | 'raceNumber'
    | 'team'
    | 'country'
    | 'countryFlag'
    | 'driverImage'
  >[]
}

const Podium = ({ podium }: podiumProps) => {
  const bgColors = [
    'bg-[#01a0e8]',
    'bg-[#239970]',
    'bg-[#e90021]',
    'bg-[#b7bbbd]',
    'bg-[#53e253]',
    'bg-[#fe8001]',
    'bg-[#26f4d3]',
    'bg-[#243d97]',
    'bg-[#3671c6]',
    'bg-[#1969db]'
  ]

  return (
    <>
      {podium.length > 0 && (
        <div className='flex flex-col items-center justify-center gap-y-10'>
          <h3 className='text-xl md:text-2xl lg:text-3xl font-extrabold text-neutral-200'>
            Podio ganador del GP
          </h3>

          <div className='flex flex-col md:flex-row items-center justify-evenly w-full pt-34 gap-y-38 md:gap-y-0 md:gap-x-6'>
            {podium.map((driver, i) => (
              <a
                key={driver.id}
                href={`/driver/${driver.name
                  .replaceAll(' ', '-')
                  .toLowerCase()}`}
                className={`flex flex-col items-center justify-center w-[200px] lg:w-[230px] h-[100px] hover:-translate-y-2 transition-transform duration-300 ease-in-out group ${
                  i === 0
                    ? 'md:order-2 md:scale-105'
                    : i === 1
                    ? 'md:order-1'
                    : 'md:order-3'
                }`}
              >
                <div className='absolute'>
                  <img
                    src={driver.driverImage}
                    alt={driver.name}
                    className={`h-40 object-contain -translate-y-26`}
                  />
                </div>

                <div
                  className={`w-full ${
                    bgColors[Math.floor((driver.id - 1) / 2)]
                  } h-[6px] rounded-t-xl`}
                >
                  <span className='text-neutral-100 font-bold text-7xl absolute -translate-y-22 translate-x-2'>
                    {i + 1}
                  </span>
                </div>
                <div className='flex flex-col items-center justify-center gap-y-2 py-4 w-full bg-zinc-700/30 group-hover:bg-neutral-100/10 transition-colors duration-300 ease-in-out backdrop-blur-md rounded-b-xl'>
                  <h3 className='text-neutral-100 text-xl font-semibold'>
                    {driver.fullName}
                  </h3>
                  <img
                    src={driver.countryFlag}
                    alt={driver.countryFlag}
                    className='h-6 object-contain'
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Podium
