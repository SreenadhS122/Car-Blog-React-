import Head from './components/Header';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import CarCards from './components/CarCards';
import Footer from './components/Footer';
import BlogDetails from './BlogDetails';

function App() {
  const Blogs = BlogDetails();
  return (
    <div>
        <Head/>
        <h1 className='container pt-5 pb-4 blog-heading'>All Posts</h1>
        <hr className='container' />
        {Blogs.map((element,index) => {
          return(
            <CarCards Element = {element} key={index}/>
          )
        })};
        <Footer/>
    </div>
  )
}

export default App;