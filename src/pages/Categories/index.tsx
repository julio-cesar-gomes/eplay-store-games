import ProductsList from '../../components/ProductsList'
import {
  useGetSportGamesQuery,
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAcao, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: gamesEsportes, isLoading: isLoadingSports } =
    useGetSportGamesQuery()
  const { data: gamesSimulacao, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: gamesLuta, isLoading: isLoadingFight } = useGetFightGamesQuery()
  const { data: gamesRpg, isLoading: isLoadingRpg } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        id="action"
        games={gamesAcao}
        title="Ação"
        background="black"
        isLoading={isLoadingAction}
      ></ProductsList>
      <ProductsList
        id="sports"
        games={gamesEsportes}
        title="Esportes"
        background="grey"
        isLoading={isLoadingSports}
      ></ProductsList>
      <ProductsList
        id="simulation"
        games={gamesSimulacao}
        title="Simulação"
        background="black"
        isLoading={isLoadingSimulation}
      ></ProductsList>
      <ProductsList
        id="fight"
        games={gamesLuta}
        title="Lutas"
        background="grey"
        isLoading={isLoadingFight}
      ></ProductsList>
      <ProductsList
        id="rpg"
        games={gamesRpg}
        title="RPG"
        background="black"
        isLoading={isLoadingRpg}
      ></ProductsList>
    </>
  )
}

export default Categories
