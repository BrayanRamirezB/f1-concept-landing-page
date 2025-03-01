import { type Driver } from '@/const/f1-info'
import { type CSSProperties } from 'react'

type driverPreviewProps = {
  previewDriver: Driver
}

const DriverPreview = ({ previewDriver }: driverPreviewProps) => {
  const bgColor = [
    'via-[#3574c6]',
    'via-[#24584e]',
    'via-[#ea0006]',
    'via-[#b7bbbd]',
    'via-[#69e90f]',
    'via-[#f17f04]',
    'via-[#46a09b]',
    'via-[#2324d1]',
    'via-[#161960]',
    'via-[#0b1b55]'
  ]

  const textColor = [
    'text-[#3574c6]',
    'text-[#24584e]',
    'text-[#ea0006]',
    'text-[#b7bbbd]',
    'text-[#69e90f]',
    'text-[#f17f04]',
    'text-[#46a09b]',
    'text-[#2324d1]',
    'text-neutral-100',
    'text-[#489edb]'
  ]

  const teamId = Math.floor((previewDriver.id - 1) / 2)

  return (
    <a
      key={previewDriver.id}
      href={`/driver/${previewDriver.name.replaceAll(' ', '-').toLowerCase()}`}
      className={`flex flex-col items-center justify-center gap-y-2 max-w-82 animate-pulse-fade-in hover:scale-110 transition duration-500 ease-in-out -translate-y-138 ${textColor[teamId]}`}
    >
      <img
        src={previewDriver.driverImage}
        alt={previewDriver.name}
        style={{ viewTransitionName: 'driverImage' } as CSSProperties}
        className='h-0 lg:h-50'
      />

      <div className='flex flex-row items-center justify-center gap-x-4'>
        <h3 className='hidden lg:block lg:text-3xl font-medium text-neutral-100'>
          {previewDriver.raceNumber}
        </h3>
        <img
          src={previewDriver.countryFlag}
          alt={previewDriver.name}
          className='h-0 lg:h-6 object-contain'
        />
      </div>

      <h3 className='hidden lg:block lg:text-4xl font-bold italic text-center'>
        {previewDriver.fullName}
      </h3>
      <div
        className={`h-0 lg:h-[2px] w-full bg-gradient-to-r from-transparent ${bgColor[teamId]} to-transparent`}
      ></div>
    </a>
  )
}

export default DriverPreview
