import { HeroCard } from "../components"
import { useForm } from "../../hooks/useForm"
import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string"
import { getHeroesByName } from "../helpers"



export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const { q = ''} = queryString.parse(location.search)
  const heroes = getHeroesByName(q)

  const showSearch = (q.length ===0);
  const showError =  (q.length >0) && heroes.length ===0;

  const{ searchText,formState,onInputChange,onResetForm} = useForm({
    searchText: q
  })

  const onSearchSubmit = (event) =>{
    event.preventDefault()

    // if(searchText.trim().length <= 1) {
    //   console.log('Texto muy Corto')
    //   return
    // }
    navigate(`?q=${searchText}`)
    console.log({searchText})
  }

  return (
    <>
     <h1>Search</h1>
     <hr/>

    <div className="row">
      <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
              <input 
                type="text" 
                placeholder="Search a Hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
              />
          </form>
          <button className="btn btn-outline-primary mt-1">
            Search
          </button>    
       </div>
       <div className="col-7">
            <h4>Results</h4>
            <hr/>
            {/* {
              (q==='')
              ? <div className="alert alert-primary">Search a Hero</div>
              : (heroes.length ===0) && <div className="alert alert-danger">No hero <b>{ q }</b></div>
            } */}
            <div className="alert alert-primary animate__animated animate__fadeIn" style={{display: showSearch ? '':'none'}}>
              Search a Hero
            </div>  
            <div className="alert alert-danger animate__animated animate__fadeIn" style={{display:showError? '': 'none'}}>
                No hero <b>{ q }</b>
            </div>  
            {
              heroes.map( hero => (
                <HeroCard key={hero.id} {...hero} />
              ))
            }

          </div>
    </div>
    </> 
  )
}
