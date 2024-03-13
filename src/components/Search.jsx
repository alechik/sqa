import logo from '../assets/logotienda.svg'

export default function Search() {

     return <>
         <section className="search">
             <div className="contenedor c_flex">

                 <div className="search-box f_flex">
                     <i className="fa fa-search"></i>
                     <input type="text" placeholder='Busque el producto que desea....'/>
                 </div>
             </div>
         </section>
     </>
}
