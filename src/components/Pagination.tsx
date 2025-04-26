interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  //this component is just for the pagination buttons at the end of the PokedexPage
  const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    return (
      <div className="flex justify-center items-center gap-4 my-6">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 0} // it disables the button (Previous) if the user went on the first page (page 0)
          style={{
            padding: '0.5rem 1rem',     
            backgroundColor: '#880000', 
            color: 'white',             
            borderRadius: '0.25rem',    
            opacity: 1,
          }}
          
        >
          Previous
        </button>
        
        <span className="text-lg">
          Page {currentPage + 1} of {totalPages}
        </span>
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages - 1} //doing the same with the disabling if the user is higher than total pages
          style={{
            padding: '0.5rem 1rem',     
            backgroundColor: '#880000', 
            color: 'white',             
            borderRadius: '0.25rem',    
            opacity: 1,                 
          }}
          
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  
  