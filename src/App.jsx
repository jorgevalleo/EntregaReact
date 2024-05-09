
import Header from "./componentes/Header/Header.jsx"
import ItemListContainer from './componentes/ItemListContainer/ItemListContaner.jsx'
import ItemCount from "./componentes/ItemCount/ItemCount.jsx"

function App() {

  const itemListContainerProps = {

    titulo: "Bienvenido a mi App",
    bgBlue: false
  }

  return (
    <>
      <Header/>
      <ItemListContainer
        { ...itemListContainerProps }
      />
      <ItemCount/>
    </>
  )
}

export default App