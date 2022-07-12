import React from 'react'
import data from 'assets/data/data.json'

function Civitas() {
    return (
        <div className="container-fluid p-5">
            <table class="table table-striped text-start container" style={{ fontSize: '14px' }}>
                <thead>
                    <tr>
                        <th scope="col">NO</th>
                        <th scope="col">NIP</th>
                        <th scope="col">NAMA</th>
                        <th scope="col">KODE</th>
                        <th scope="col">NIDN</th>
                        <th scope="col">PROGRAM STUDI</th>
                        <th scope="col">KELOMPOK KEAHLIAN</th>
                        <th scope="col">e-mail Tel-U</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data?.map((d) => (
                        <tr key={d.NO}>
                            <td>{d.NO}</td>
                            <td>{d.NIP}</td>
                            <td>{d.NAMA_LENGKAP}</td>
                            <td>{d.KODE_DOSEN || '-'}</td>
                            <td>{d.NIDN || '-'}</td>
                            <td>{d.LOKASI_KERJA}</td>
                            <td>{d.KELOMPOK_KEAHLIAN || '-'}</td>
                            <td>{d.EMAIL || '-'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Civitas

// {
//     stockData.map((data, key) => {
//         return (
//             <div key={key}>
//                 <Stock
//                     key={key}
//                     company={data.company}
//                     ticker={data.ticker}
//                     stockPrice={data.stockPrice}
//                     timeElapsed={data.timeElapsed}
//                 />
//             </div>
//         );
//     })
// }