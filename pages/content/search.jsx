import React from "react";
import data from '../json/example_data.json'
import { useState } from "react";
import Card from 'react-bootstrap/Card'
import styles from '../css/search.module.css'
import { page, min, max } from './paginav'
import Image from 'next/image'


var today = new Date();
var DayNum = today.getDay();
var Day = "";

if (DayNum == 0) {
  Day = "Sunday"
} else if (DayNum == 1) {
  Day = "Monday"
} else if (DayNum == 2) {
  Day = "Tuesday"
} else if (DayNum == 3) {
  Day = "Wednesday"
} else if (DayNum == 4) {
  Day = "Thursday"
} else if (DayNum == 5) {
  Day = "Friday"
} else if (DayNum == 6) {
  Day = "Saturday"
}

export default function Search() {
  const [query, setQuery] = useState("")
  return (
    <div>

      <input placeholder='Search name...' onChange={event => setQuery(event.target.value)} className={styles.searchbar}></input>
      <img alt="" src="VectorS.png" className={styles.vector} />

      {
        data.filter(data => {
          if (query === '') {
            return data;
          } else if (data.name.toLowerCase().includes(query.toLowerCase())) {
            return data;
          }
        }).slice(min, max).map((data) => (
          <div className="box" key={data.id}>
            <div className={styles.container}>
              <div className={styles.row}>
                <div className={styles.subcon}>
                  <div className={styles.card}>
                    <img alt="" src={data.profile_image_url} className={styles.profilepic} />
                    <Card.Text className={styles.placename}>{data.name}</Card.Text>
                    <div className={styles.optime}>
                      <img alt="" src="VectorD.png" className={styles.vector1}/>
                      {data.operation_time.map((match) => {
                        if (Day == match.day && match.time_open == match.time_close) {
                          return <Card.Text>Closed</Card.Text>
                        }
                        else if (Day == match.day) { return <Card.Text>Open {match.time_open} - {match.time_close}</Card.Text> }

                      })}
                    </div>
                    <li className={styles.rating}>{data.rating}</li>

                  </div>
                  <div className={styles.prevcon}>

                    <div className={styles.previewpic}>
                      {data.images.map((item, image) => {
                        return <div key={image}><img alt="" src={item} className={styles.images} /></div>
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}