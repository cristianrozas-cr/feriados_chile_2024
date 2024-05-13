
function Buscador({search, setSearch}){
  return(

    <>
    <input placeholder="Indica el nombre" className="input-text" type="text" value={search}  onChange={(e) => setSearch(e.target.value)}/>
    
    </>
  )
}

export default Buscador