import React, { Component } from 'react'
import styles from '../css/paginav.module.css'
import Image from 'next/image'

export var page = 1;
export var min = ((page - 1) * 9);
export var max = min + 9;

export default class Paginav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          page: 1
        };
      }


     refresh = () => {
        // re-renders the component
        this.setState({});
    };


    render() {
        

        function next(e) {
            page = page + 1;
            console.log('plus');
            console.log(page);
            console.log(min);
            console.log(max);
            //    e.target.blur();
            refresh = () => {
                // re-renders the component
                this.setState({});
            };
        
        }

        function previous(e) {
            e.preventDefault();
            page = page - 1;
            console.log('minus');
            console.log(page);
            console.log(min);
            console.log(max);
            // e.target.blur();
        }
        return (
            <center><div className={styles.navbody}>
                {page <= 1
                    ? <button disabled={"disabled"} className={styles.buttond} ><img alt="" src="Vector.png" className={styles.vectorback}/></button>
                    : <button onClick={function () { previous();refresh() }} className={styles.button} ><img alt="" src="Vector.png" style={{ marginTop: '4px', marginRight: '1px' }}/></button>
                }
                <button className={styles.pagenum}>{console.log("page change")}{console.log(page)}{page}</button>
                <button onClick={() => this.setState({ page: this.state.page + 1 })} className={styles.button}><img alt="" src="Vector2.png" className={styles.vectornext}/></button>

            </div></center>

        )
    }

}
