import { HeroCard } from "../components"


export const SearchPage = () => {
  return (
    <>
     <h1>Search</h1>
     <hr/>

    <div className="row">
      <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form action="">
              <input 
                type="text" 
                placeholder="Search a Hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
              />
          </form>
          <button className="btn btn-outline-primary mt-1">
            Search
          </button>    
       </div>
       <div className="col-7">
            <h4>Results</h4>
            <div className="alert alert-primary">
              Search a Hero
            </div>
            <div className="alert alert-danger">
              No hero <b>ABC</b>
            </div>

            {/* <HeroCard {...hero} /> */}
          </div>
    </div>
    </> 
  )
}
