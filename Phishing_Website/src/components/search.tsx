function Search(){
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <div className="input-group" style={{ width: '500px' }}>
            <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            />
            <div className="input-group-append" style={{ marginLeft: '5px'}}>
            <button type="button" className="btn btn-outline-primary" style={{color:'black', borderColor:'black'}} data-mdb-ripple-init>
                Detect
            </button>
            </div>
        </div>
        </div>
      );
}

export default Search;