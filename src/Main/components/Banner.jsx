import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-block">
            <div className='d-flex flex-column justify-content-center h-100 p-4'>
            <h1 className="fw-bold text-light w-75">ВСЕ МЕНЯЕТСЯ. ЦЕННОСТИ ОСТАЮТСЯ.</h1>
            
            <button className='btn btn-outline-danger mt-4'>Get Started</button>
            </div>
        </div>
    )
}

export default Banner;