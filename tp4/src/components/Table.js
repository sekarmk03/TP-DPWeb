import React from 'react';

export const Table = ({ nama, tglLahir, jnsKelamin, hobi, agama, pesan }) => {
  return (
    <div className="container">
      <table className="table mt-5 table-result d-none">
        <thead>
          <tr>
            <th scope="col-4">Label</th>
            <th scope="col-4">Value</th>
          </tr>
        </thead>
        <tbody className="table-content">
          <tr>
            <th scope="row">Nama:</th>
            <td>{nama}</td>
          </tr>
          <tr>
            <th scope="row">Tanggal Lahir:</th>
            <td>{tglLahir}</td>
          </tr>
          <tr>
            <th scope="row">Jenis Kelamin:</th>
            <td>{jnsKelamin}</td>
          </tr>
          <tr>
            <th scope="row">Hobi:</th>
            <td>{hobi}</td>
          </tr>
          <tr>
            <th scope="row">Agama:</th>
            <td>{agama}</td>
          </tr>
          <tr>
            <th scope="row">Pesan:</th>
            <td>{pesan}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
