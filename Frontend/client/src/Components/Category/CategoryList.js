import React, { useEffect } from 'react'
import { useState } from 'react'
import { getCategories } from '../../Function/Category';
import Loader from "react-loader-spinner";
import { Link } from 'react-router-dom';

function CategoryList() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getCategories().then((c) => {
            
            setCategories(c.data);
            setLoading(false);
        })
    },[])
console.log(categories);
const showCategory = () => categories.map((c) => <div
    key={c._id}
     className="btn col btn-outlined-primary btn-lg btn-block btn-raised m-3 ">
        <Link to={`/category/${c.slug}`}>
        {c.name}
        </Link>
    </div>
    )

    return (
        <div className="container">
            <div className="row">
                {loading ? (
                    <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
                ): 
                    showCategory()
                }
            </div>
        </div>
    )
}

export default CategoryList
