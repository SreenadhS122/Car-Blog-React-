import { useState } from 'react';
import UserDetail from './UserDetail';

function CarCards(props){
   const {Author,AuthorProfilePic,PostDate,Title,Content,BlogImage} =  props.Element;
   const [Article,SetArticle] = useState(Content.split(" ").length>50?Content.split(" ").slice(0,50).join(" ")+"...":Content);
   const [Button,ChangeButton] = useState("Read More");
   const ChangeArticle = () => {
    if(Article === Content){
        SetArticle(Content.split(" ").slice(0,50).join(" ")+"...");
        ChangeButton("Read More");
    }else{
        SetArticle(Content);
        ChangeButton("Read Less");
    }
   }
    return(
        <div className='p-4'>
            <div className="container">
                 <div className='row'>
                <img src={require(`../images/blogPics/${BlogImage}`)} alt="" className='col-lg-6 col-md-12 object-fit-cover'/>
            <div className='d-flex flex-column gap-3 align-items-start align-items-start col-lg-6 col-md-12'>
                <h1 className='blog-title' >{Title}</h1>
                <UserDetail Image={AuthorProfilePic} Name={Author} Date={PostDate}/>
                <p className='article'>
                    {Article}
                </p>
                {Content.split(" ").length>50 && <button className='btn btn-danger' onClick={ChangeArticle}>{Button}</button>}
            </div> 
            </div>
            </div>
           
        </div>
        
    )
}

export default CarCards;