import React, { useState,useEffect} from 'react';

function SearchBar({todos}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    
    const filterText = (text, searchTerm) => {
        const lowerCaseText = text.toLowerCase();
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return lowerCaseText.includes(lowerCaseSearchTerm);
      };
      
        
        const filteredResults = todos.map(({ text }) => text).filter((text)=> filterText(text,searchTerm));
        return setSearchResults(filteredResults);
      
    
      };
      // console.log(searchResults);

      useEffect(() => {
        const filterTodos = () => {
          if (!searchTerm) {
            setSearchResults([]); 
            return;
          }
    
          const filteredResults = todos.filter((todo) =>
            todo.text.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setSearchResults(filteredResults);
        };
    
        filterTodos();
      }, [searchTerm, todos]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className='bg-white border border-success'
        value={searchTerm}
        onChange={handleSearch}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}

      />
      <div>
       
      {searchTerm && isDropdownOpen && (
          <ul className="search-results bg-lime-300 rounded-sm mr-8 my-2">
            {isLoading ? ( 
              <li>Filtering...</li>
            ) : searchResults.length > 0 ? (
              searchResults.map((result) => (
                <li className='px-2' key={result.id || Math.random().toString(36)}>{result.text}</li>
                
              ))
            ) : (
              <li>No results found.</li>
            )}
          </ul>
        )}
        
       
      </div>
</div>
    
  );
}


export default SearchBar;