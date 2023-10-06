


// eslint-disable-next-line react/prop-types
const NewsCard = ({news}) => {
    // eslint-disable-next-line react/prop-types
    const {title, thumbnail_url} = news
    return (
        <div className="card w-10/12 rounded-none mb-8 bg-base-100 shadow-2xl">
            <img src={thumbnail_url} alt="Shoes" className="w-11/12 h-72 mx-auto rounded-sm rounded-s-none" />
            <div className="card-body">
                <h2 className="card-title">
                {title}
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                
            </div>
        </div>
    );
};

export default NewsCard;