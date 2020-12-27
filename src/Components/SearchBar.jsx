
import '../App.css';
const SearchBar= (props)=>{
    
    return(
     <input className="text-center search-input pt-1 pb-1" 
     type="text" value={props.value} onChange={props.onChange}/>
    ); 
}

export default SearchBar;