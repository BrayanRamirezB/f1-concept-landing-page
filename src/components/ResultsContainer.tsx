import { type Team } from '@/const/f1-info'
import Table from '@/components/Table/Table'
import TableHeader from '@/components/Table/TableHeader'
import TableColumn from '@/components/Table/TableColumn'
import TableBody from '@/components/Table/TableBody'
import TableRow from '@/components/Table/TableRow'
import TableCell from '@/components/Table/TableCell'

type resultsContainerProps = {
  teams: Team[]
}

const ResultsContainer = ({ teams }: resultsContainerProps) => {
  const sortedTeams = teams.sort(
    (a, b) => b.currentPointsWC - a.currentPointsWC
  )

  const sortedDrivers = teams
    .flatMap((team) => team.drivers)
    .sort((a, b) => b.currentPointsDWC - a.currentPointsDWC)

  const textHoverColor = [
    'hover:text-[#01a0e8]',
    'hover:text-[#239970]',
    'hover:text-[#e90021]',
    'hover:text-[#b7bbbd]',
    'hover:text-[#53e253]',
    'hover:text-[#fe8001]',
    'hover:text-[#26f4d3]',
    'hover:text-[#243d97]',
    'hover:text-[#3671c6]',
    'hover:text-[#1969db]'
  ]

  return (
    <div className='flex flex-col items-center justify-center gap-y-8'>
      <div className='flex flex-col items-center justify-center gap-y-6'>
        <h3 className='text-xl md:text-2xl lg:text-3xl font-extrabold text-neutral-200'>
          Clasificación de constructores 2025
        </h3>
        <div className='w-[400px] md:w-[560px] lg:w-[835px]'>
          <Table>
            <TableHeader>
              <TableColumn>Posición</TableColumn>
              <TableColumn>Equipo</TableColumn>
              <TableColumn>Puntos</TableColumn>
            </TableHeader>
            <TableBody>
              {sortedTeams.map((team, i) => (
                <TableRow key={team.id}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>
                    <a
                      href={`/team/${team.name
                        .replaceAll(' ', '-')
                        .toLowerCase()}`}
                      className={`hover:underline ${
                        textHoverColor[team.id - 1]
                      }`}
                    >
                      {team.fullName}
                    </a>
                  </TableCell>
                  <TableCell>{team.currentPointsWC}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className='h-[2px] w-full bg-gradient-to-r from-transparent via-neutral-100/60 to-transparent'></div>

      <div className='flex flex-col items-center justify-center gap-y-6'>
        <h3 className='text-xl md:text-2xl lg:text-3xl font-extrabold text-neutral-200'>
          Clasificación de pilotos de 2025
        </h3>
        <div className='w-[400px] md:w-[700px] lg:w-[835px]'>
          <Table>
            <TableHeader>
              <TableColumn>Posición</TableColumn>
              <TableColumn>Piloto</TableColumn>
              <TableColumn>Nacionalidad</TableColumn>
              <TableColumn>Equipo</TableColumn>
              <TableColumn>Puntos</TableColumn>
            </TableHeader>
            <TableBody>
              {sortedDrivers.map((driver, i) => (
                <TableRow key={driver.id}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>
                    <a
                      href={`/driver/${driver.name
                        .replaceAll(' ', '-')
                        .toLowerCase()}`}
                      className={`hover:underline ${
                        textHoverColor[Math.floor((driver.id - 1) / 2)]
                      }`}
                    >
                      {driver.fullName}
                    </a>
                  </TableCell>
                  <TableCell>{driver.country}</TableCell>
                  <TableCell>
                    <a
                      href={`/team/${driver.team
                        .replaceAll(' ', '-')
                        .toLowerCase()}`}
                      className={`hover:underline ${
                        textHoverColor[Math.floor((driver.id - 1) / 2)]
                      }`}
                    >
                      {driver.team}
                    </a>
                  </TableCell>
                  <TableCell>{driver.currentPointsDWC}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default ResultsContainer
