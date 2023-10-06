import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftNav = () => {

    const [categpries, setCategories] = useState([]);

    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div>
            <h2 className="text-2xl font-medium text-start mb-6">All Category</h2>
            {
                categpries.map(category => <NavLink to={`/category/${category.id}`} className="block  px-5 py-4 hover:bg-slate-200 rounded" key={category.id}> {category.name} </NavLink>)
            }
        </div>
    );
};

export default LeftNav;