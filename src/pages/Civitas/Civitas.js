import React from 'react'
import data from 'assets/data/data.json'
import Footer from '../../components/Footer/FooterTwo'

function Civitas() {
    return (
        <div>
            <div className="p-5" style={{ overflowX: 'auto' }}>
                <table className="table table-striped text-start container" style={{ fontSize: '14px' }}>
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
            <Footer />
        </div>
    )
}

export default Civitas