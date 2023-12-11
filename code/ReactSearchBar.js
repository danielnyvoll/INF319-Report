const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        onSearch();
      }
    };