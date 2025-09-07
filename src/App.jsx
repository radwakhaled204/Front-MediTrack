
import './Header.css'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import PostComponent from './components/PostComponent'

 import SideBarComponent from './components/SideBarComponent'
function App() {
  

  return (
  <div>
        <div>  
           <nav>
               <header><HeaderComponent/></header>                 
           </nav>
        </div>
      
  <div className="body">
        <div className="posts-container">
          <PostComponent/>
          <PostComponent  />
          <PostComponent />
          <PostComponent />
        </div>
        
           <div className="sidebar-container">
            <div className={"sidebar"}>
        <SideBarComponent/>
        <SideBarComponent/>
        <SideBarComponent/>
        <SideBarComponent/>

        </div> 
        </div>
      </div>     
      
       
  
    
 </div>
  );
}

export default App
