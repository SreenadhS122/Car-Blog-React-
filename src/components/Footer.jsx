import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";


function Footer(){
    return (
        <div className="footer">
        <div className='container p-5'>
            <form className="subscribe-form align-items-center row p-5 justify-content-center">
                <h1 className="col-lg-6">
                Subscribe to our news letter to get latest updates and news
                </h1>
                <div className="row col-lg-6 gap-1">
                <input type="text" className="p-3 col-lg-6" placeholder="abc@gmail.com"/>
                <button className="btn btn-danger text-white fw-bold align-items-center d-flex col-lg-4 justify-content-center">Subscribe 
                    <IoPaperPlaneOutline />
                </button>
                </div>
            </form>
            <div className="d-flex justify-content-between pt-5">
                <div>
                       <p className="footer-link">
                Finstreet 118 2561 abctown 
                </p>
                <p className="footer-link">
                example@femail.com  001 21345 442
                </p>
                </div>
                <div className="d-flex align-items-center icons gap-2">
                <IoLogoFacebook/>
                <FaInstagram/>
                <RiTwitterXFill/>
                <FaLinkedin/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer;