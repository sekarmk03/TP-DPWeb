import React from 'react';

const Formulir = ({
  nama,
  tglLahir,
  jnsKelamin,
  hobi,
  agama,
  pesan,
  handleChange,
  handleCheckbox,
  handleSubmit,
}) => {
  return (
    <div className="container">
      <h1 className="text-center">Biodata</h1>
      <form className="row g-3 " id="form-biodata" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="name" className="form-label">
            Nama
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="nama"
            placeholder="Masukan Nama"
            onChange={handleChange}
            value={nama}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="tgl-lahir" className="form-label">
            Tanggal Lahir
          </label>
          <input
            type="date"
            className="form-control"
            id="tgl-lahir"
            name="tglLahir"
            onChange={handleChange}
            value={tglLahir}
            required
          />
        </div>
        <label htmlFor="Jenis-Kelamin" className="form-label mb-0">
          Jenis Kelamin
        </label>
        <div className="col-12 d-flex flex-row">
          <div className="form-check form-check-inline">
            <input
              className="jenis-kelamin"
              type="radio"
              name="jnsKelamin"
              id="Laki-laki"
              value="Laki-laki"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="Laki-laki">
              Laki-laki
            </label>
          </div>
          <div className="form-check form-check-inline ms-2">
            <input
              className="jenis-kelamin"
              type="radio"
              name="jnsKelamin"
              id="perempuan"
              value="Perempuan"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="perempuan">
              Perempuan
            </label>
          </div>
          <div className="form-check form-check-inline ms-2">
            <input
              className="jenis-kelamin"
              type="radio"
              name="jnsKelamin"
              id="otherJenisKelamin"
              onChange={handleChange}
              value="Other"
            />
            <label className="form-check-label" htmlFor="otherJenisKelamin">
              Other
            </label>
          </div>
        </div>
        <label htmlFor="Hobi" className="form-label mb-0">
          Hobi
        </label>
        <div className="col-12 d-flex flex-row">
          <div className="form-check">
            <input
              className="fomr-check-input"
              name="hobi"
              type="checkbox"
              value="Ngoding"
              id="inlineCheckbox1"
              onChange={handleCheckbox}
            />
            <label className="form-check-label" htmlFor="ngoding">
              Ngoding
            </label>
          </div>
          <div className="form-check form-check-inline ms-2">
            <input
              className="fomr-check-input"
              name="hobi"
              type="checkbox"
              value="Rebahan"
              id="inlineCheckbox2"
              onChange={handleCheckbox}
            />
            <label className="form-check-label" htmlFor="rebahan">
              Rebahan
            </label>
          </div>
          <div className="form-check form-check-inline ms-2">
            <input
              className="fomr-check-input"
              name="hobi"
              type="checkbox"
              value="Melamun"
              id="inlineCheckbox3"
              onChange={handleCheckbox}
            />
            <label className="form-check-label" htmlFor="melamun">
              Melamun
            </label>
          </div>
          <div className="form-check form-check-inline ms-2">
            <input
              className="fomr-check-input"
              name="hobi"
              type="checkbox"
              value="Baca Buku"
              id="inlineCheckbox4"
              onChange={handleCheckbox}
            />
            <label className="form-check-label" htmlFor="bacaBuku">
              Baca Buku
            </label>
          </div>
          <div className="form-check form-check-inline ms-2">
            <input
              className="fomr-check-input"
              type="checkbox"
              name="hobi"
              value="Nonton Youtube"
              id="inlineCheckbox5"
              onChange={handleCheckbox}
            />
            <label className="form-check-label" htmlFor="nontonYoutube">
              Nonton Youtube
            </label>
          </div>
          <div className="form-check form-check-inline ms-2">
            <input
              className="fomr-check-input"
              type="checkbox"
              name="hobi"
              value="Dengerin Lagu"
              id="inlineCheckbox6"
              onChange={handleCheckbox}
            />
            <label className="form-check-label" htmlFor="dengerinLagu">
              Dengerin Lagu
            </label>
          </div>
          <div className="form-check form-check-inline ms-2">
            <input
              className="fomr-check-input"
              name="hobi"
              type="checkbox"
              value="Other Hobi"
              id="inlineCheckbox7"
              onChange={handleCheckbox}
            />
            <label className="form-check-label" htmlFor="otherHobi">
              other
            </label>
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="agama" className="form-label">
            Agama
          </label>
          <select
            id="agama"
            className="form-select"
            onChange={handleChange}
            name="agama"
          >
            <option value="Islam">Islam</option>
            <option value="Katolik">Katolik</option>
            <option value="Protestan">Protestan</option>
            <option value="Budha">Budha</option>
            <option value="Hindu">Hindu</option>
            <option value="Konghucu">Konghucu</option>
            <option value="Tao">Tao</option>
          </select>
        </div>
        <div className="col-12">
          <label htmlFor="pesan" className="form-label">
            Pesan
          </label>
          <textarea
            type="textarea"
            className="form-control"
            id="pesan"
            name="pesan"
            placeholder="Masukan Pesan"
            onChange={handleChange}
            value={pesan}
          ></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulir;
