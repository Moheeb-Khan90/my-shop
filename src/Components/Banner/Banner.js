import product from '../../Data/Products.json'
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide banner">
                <div className="carousel-indicators">
                    {product.products.map((item, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {product.products.map((item, index) => (
                        <div
                            key={item.id}
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                        >
                            <img src={item.image} className="d-block w-100 img-fluid" id='banner-img' alt={item.title}
                            />

                            <div className="carousel-caption d-block d-md-block d-sm-block">
                                <h3 id='banner-heading'>{item.title}</h3>

                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Banner