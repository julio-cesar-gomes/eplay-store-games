import { useParams } from 'react-router-dom'
import { useGetGameQuery } from '../../services/api'
import Loader from '../../components/Loader'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

type GameParams = {
  id: string
}

const Product = () => {
  const { id } = useParams() as GameParams
  const { data: game } = useGetGameQuery(id)

  if (!game) {
    return <Loader />
  }

  return (
    <>
      <Hero game={game}></Hero>
      <Section title="Sobre o Jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais Detalhes" background="grey">
        <p>
          <b>Plataforma: </b> {game.details.system} <br />
          <b>Desenvolvedor: </b> {game.details.developer} <br />
          <b>Editora: </b> {game.details.publisher} <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas incluindo{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      ></Gallery>
    </>
  )
}

export default Product