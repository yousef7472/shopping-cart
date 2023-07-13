import "../../css/Filter/Filter.css"
const Filter = () => {
    return ( 
        <aside className="filter-wrapper">
            <h2 className="filter-title">Filter</h2>
            <div>
                <h3 className="num-of-products">number of products 4</h3>
                <section className="filter-by-size">
                    <h3>Filter</h3>
                    <select className="filter-select">
                        <option value="All">All</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                    </select>
                </section>
                <section>
                    <h3>Order</h3>
                    <select className="filter-select">
                        <option value="latest">Latest</option>
                        <option value="newest">Newest</option>
                        <option value="heighest">Heighest</option>
                    </select>
                </section>
            </div>
        </aside>
     );
}
 
export default Filter;