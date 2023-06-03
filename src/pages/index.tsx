import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Pagina from "@/components/Page";
import { useState } from "react";


export default function Home() {

  const [menu, setMenu] = useState<boolean>(false)

  function manipulaMenu(){
    setMenu(!menu)
  }

  return (
    <div>
      <Pagina>
        <Header onClick={manipulaMenu}/>
        {!menu ? (<Menu/>) : ''}
          
      </Pagina>
    </div>
  )
}
