import "./Pagination.css"
import "../../pages/ProductList/ProductList.css";
import { useState , useEffect} from "react";

const Pagination = ({ data, RenderComponent, pageLimit, dataLimit }) =>{
    const [pages] = useState(Math.round(data.length / dataLimit)); //10/5 = 2
    const [currentPage, setCurrentPage] = useState(1); //1

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' }); // scroll to top
      }, [currentPage]);

   
      const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((item,index) => start + index + 1); 
      }; 


      const getPaginatedData = () => {

        let startIndex =0
        let endIndex = 0

        if(data.length<=5){
           startIndex = 0; 
           endIndex = 5;
        }else{
           startIndex = currentPage * dataLimit - dataLimit; 
           endIndex = startIndex + dataLimit;
        }

        return data.slice(startIndex, endIndex);
      };


      function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
      }

      function goToPreviousPage() {
        setCurrentPage((page) => page - 1); 
      }

      function goToNextPage() {
        setCurrentPage((page) => page + 1);
      }


    

  return(
    <div>   
     <div  className='diaplay-cart-list'> 
     

      {getPaginatedData().map((item, index) => (
        <RenderComponent data={item} key={index} />
      ))}
     </div>

     {
       data.length>5?
       <div className="pagination">
       <button onClick={goToPreviousPage} className= {currentPage === 1 ? 'prev disabled' : 'prev'}>prev</button>
       {getPaginationGroup().map((item, index) => (
         <button key={index} onClick={changePage} className={currentPage === item ? 'paginationItem active' :'paginationItem'}>
           <span>{item}</span>
         </button>
       ))}
        <button onClick={goToNextPage} className={currentPage === pages ? 'disabled next' : 'next'}>next</button>
     </div> : null
     } 

  </div>
  )
}
export default Pagination