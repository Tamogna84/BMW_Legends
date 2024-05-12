const Card = (props) => {
    return (
        <div className="col-sm-12 col-md-4 col-lg-3">
            <div class="card mb-4">
                <img src={props.image} class="card-img-top" alt={props.title} />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">Price: {props.price}$</p>
                    <a href="#" class="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
        </div>
    );
};

Card.defaultProps = {
    title: "Легенда))",
    price: "Бесценно",
    image: require("../../assets/images/bmw_750i.jpg"),
};

export default Card;
