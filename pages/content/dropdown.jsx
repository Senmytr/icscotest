import React from "react";
import styles from '../css/dropdown.module.css'
const Dropdown1 =() => {
        <div >
            <select id="cate" defaultValue="Select Category" className={styles.dropdownhead}>
                <option id="hidden" disabled hidden>Select Category</option>
                <option value="Restaurent">Restaurent</option>
                <option value="Cafe">Cafe</option>
                <option value="Bakery">Bakery</option>
                <option value="All">All</option>
            </select>
        </div>
    }
    export default Dropdown1;