import { Link } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const NewsCard = ({Anews}) => {
    // eslint-disable-next-line react/prop-types
    const {title, image_url, details, _id} = Anews;
    return (
        <div className="card w-10/12 rounded-none mb-8 bg-base-100 shadow-2xl">
            <img src={image_url} alt="Shoes" className=" mx-aut rounded-t-md rounded-b-none" />
            <div className="card-body">
                <h2 className="card-title">
                {title}
                </h2>
                <p>
                    {
                        // eslint-disable-next-line react/prop-types
                        details.length > 200 ? 
                        // eslint-disable-next-line react/prop-types
                        <p> {details.slice(0, 200)} 
                            <Link to={`/news/${_id}`} className="text-xl text-rose-500 font-medium"> Read More</Link>
                        </p> 
                        :
                        <p>{details}</p>
                    }
                </p>
                
            </div>
        </div>
    );
};

export default NewsCard;