import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div>
            <div className="flex gap-2 px-4 py-3 bg-slate-50 rounded-sm">
                <button className="btn rounded-sm text-white px-8 tracking-wider bg-rose-500 hover:bg-rose-600">Latest</button>
                <Marquee pauseOnHover={true} speed={120}>
                    <p className="mr-7">Match Highlights: Germany vs Spain as it happened ! </p>
                    <p className="mr-7">Match Highlights: Germany vs Spain as it happened ! </p>
                    <p className="mr-7">Match Highlights: Germany vs Spain as it happened ! </p>
                    
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;