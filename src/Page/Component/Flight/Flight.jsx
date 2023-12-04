import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';  

function Flight() {
    const opt = {
        loop:true,
        items:6,
        margin:5,
        nav:true,
        autoplay:true,
        autoplayTimeout:2000,
       
        responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
        },
    };
  return (
    <>
        <div className="container">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/369409418_1489538764954347_2623522922998863824_n.png?stp=dst-png_s350x350&_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_ohc=OJ4v0kcmOdcAX_I3tG1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRruejdw6z1jz64w-xWxEBYwqs6GugLxCopwAjsJAi6eQ&oe=658C5801" className="d-block w-100" alt="" height={500} />
                </div>
                <div className="carousel-item">
                <img src="https://img.freepik.com/free-vector/flat-airline-service-company-social-media-promo-template_23-2149660877.jpg?w=360" className="d-block w-100" alt="" height={500}/>
                </div>
                <div className="carousel-item">
                <img src="https://www.shutterstock.com/image-vector/flight-travel-trip-banner-online-600nw-1390484558.jpg" className="d-block w-100" alt="" height={500}/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            <div className="con1">
                <div>Explore Our Destinations</div>
                <p>Be Better Connected with Yeti Airlines across Nepal</p>
            </div>
            <OwlCarousel className='owl-carousel'{...opt}>
                <div>
                    <div className="item">
                        <a href=""><img src="https://yetiairlines.com/file-manager/photos/2/Kathmandu_Website_yeti_march_2019.jpg" alt="" /></a>
                        <a href=""><img src="https://yetiairlines.com/file-manager/photos/2/Nepaljung_Website_yeti_march_2019.jpg" alt="" /></a>
                        <a href=""><img src="https://yetiairlines.com/file-manager/photos/2/Destinations/Pokhara/Pokhara_YetiAirlines.jpg" alt="" /></a>
                        <a href=""><img src="https://yetiairlines.com/file-manager/photos/2/Destinations/800px-Janaki_Mandir-Janakpur_Nepal-7499.jpg" alt="" /></a>
                        <a href=""><img src="https://yetiairlines.com/file-manager/photos/2/Destinations/bhairahawa.jpg" alt="" /></a>
                        <a href=""><img src="https://www.yetiairlines.com/uploads/destinationImages/5f423627994ae.jpg" alt="" /></a>
                    </div>
                </div>
            </OwlCarousel>;


        </div>
    </>
  )
}

export default Flight



