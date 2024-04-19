import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'
import ProductsList from '../../components/ProductsList'
import Banner from '../../components/Banner'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner></Banner>
      <ProductsList
        id="on-sale"
        games={onSaleGames}
        title="Promoções"
        background="grey"
        isLoading={isLoadingSale}
      ></ProductsList>
      <ProductsList
        id="coming-soon"
        games={soonGames}
        title="Em Breve"
        background="black"
        isLoading={isLoadingSoon}
      ></ProductsList>
    </>
  )
}

export default Home
