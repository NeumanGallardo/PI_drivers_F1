
import React,{useState} from 'react';
import Card from '../Card/index';
import style from './Cards.module.css';
const Cards = ({allDrivers})=>{
   const driversList = allDrivers;
   if(driversList.length === 0) return (<p>driver no encontrado</p>);

   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 9;

     // Calcula el número total de páginas
  const totalPages = Math.ceil(allDrivers.length / itemsPerPage);
 
   // Calcula el índice del primer y último elemento en la página actual
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 
   // Obtiene los elementos de la página actual
   const currentItems = allDrivers.slice(indexOfFirstItem, indexOfLastItem);
 
   // Cambia a la página siguiente
   const nextPage = () => {
     setCurrentPage(currentPage + 1);
   };
 
   // Cambia a la página anterior
   const prevPage = () => {
     setCurrentPage(currentPage - 1);
   };

     // Cambia a una página específica
  const goToPage = (pageNumber) => {
   setCurrentPage(pageNumber);
 };


     // Genera los números de página
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <button key={i} onClick={() => goToPage(i)} disabled={currentPage === i}>
        {i}
      </button>
    );
  }

   return(<div className={style.cards}> 
{currentItems?.map((item)=>{ return(<div key={item.id}><Card id={item.id} name={item.name} 
image={item.image} teams={item.teams}/></div>)})}

      {/* Controles de paginación */}
{allDrivers.length>9 && (<div className={style.footer}>
   <button onClick={prevPage} disabled={currentPage === 1}>Anterior</button>
   <span>  Página {currentPage} de {totalPages}  </span>
   <button onClick={nextPage} disabled={indexOfLastItem >= allDrivers.length}>Siguiente</button>
      </div>)
}

</div>
);
};

export default Cards;
