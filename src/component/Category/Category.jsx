import React from "react";
import c from './Category.module.css';
import CategoryItem1 from "./categoryItems/CategoryItem1";

const CategoryItemDb= [
    {id:1, name:"Guided Tours", text:"sunt qui repellat saepe quo velit aperiam id aliquam placeat."},
    {id:2, name:"Best Flights Options", text:"sunt qui repellat saepe quo velit aperiam id aliquam placeat."},
    {id:3, name:"Religious Tours", text:"sunt qui repellat saepe quo velit aperiam id aliquam placeat."},
    {id:4, name:"Medical insurance", text:"sunt qui repellat saepe quo velit aperiam id aliquam placeat."},
];


const Category = (props) => {
    let CategoryData = CategoryItemDb.map(category => <CategoryItem1 key={category.id} name={category.name} text={category.text} />)


    return(
        <div className={c.CaregoryBlock}>
            <div className={c.container}>
                <h2 className={c.categoryMainText}>CATEGORY</h2>
                <p className={c.categoryNextText}>We Offer Best Services</p>
                <div className={c.categoryItem}>
                    {CategoryData}
                </div>
            </div>
        </div>
          
    );
}

export default Category;