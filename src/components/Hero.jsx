import { IoPaperPlaneOutline } from "react-icons/io5";

function Hero(){
    return (
        <div className="hero">
            <div className="container">
            <div className="row p-5 align-items-center">
                    <div className="d-flex flex-column align-items-start col-lg-6 hero-content col-md-12 col-sm-12">
                        <h1>
                        Your Journey 
                        </h1>
                        <h1>
                        Your Car 
                        </h1>
                        <h1>
                        Ytour Way
                        </h1>
                        <p>
                        Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi elementum vel euismod aliquam. Amet ultrices neque augue consectetur purus phasellus. Ullamcorper lorem montes varius amet vestibulum tellus facilisis consequat pretium. Et faucibus laoreet molestie diam semper fames diam eget.
                        </p>
                        <button className="btn btn-danger text-white fw-bold align-items-center d-flex gap-1">Subscribe 
                            <IoPaperPlaneOutline />
                        </button>
                    </div>
                    <div className="position-relative hero-image col-lg-6 d-xs-none d-none d-lg-block">
                        <img className="position-absolute car1" src={require('../images/blogPics/Car (1).png')} alt="car 1" />
                        <img className="position-absolute car2" src={require('../images/blogPics/Car (2).png')} alt="car 2" />
                        <img className="position-absolute car3" src={require('../images/blogPics/Car (3).png')} alt="car 3" />
                        <img className="position-absolute car4" src={require('../images/blogPics/Car (4).png')} alt="car 4" />
                    </div>
            </div>
            </div>
           
        </div>
    )
}

export default Hero;