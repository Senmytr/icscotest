
import Image from 'next/image'
export default function Searchbar() {
    return (
        <div>
            <input placeholder='Search name...' onChange={event => setQuery(event.target.value)} style={{ boxSizing: 'border-box', width: '400px', height: '40px', background: '#FFFFFF', border: '1px solid #134B8A', borderRadius: '50px', margin: '-32px -612px 0px 0px', float: 'right', fontFamily: 'Kanit', fontSize: '14px', fontWeight: '400', textAlign: 'center' }}></input>
            <img alt="" src="VectorS.png" style={{ position: 'sticky', margin: '-27px 0px 55px 1372px' }} />

        </div>)

}