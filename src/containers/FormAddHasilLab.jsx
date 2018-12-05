import React from 'react';

export const FormAddHasiLab = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Add Hasil Lab</h2>
            <input type="hidden" name="pasien.id" value={props.pasien.id} />
            <div className="form-group">
                <label>Jenis</label>
                <input type="text" className="form-control" name="jenis" />
            </div>
            <div className="form-group">
                <label>Hasil </label>
                <input type="text" className="form-control" name="hasil" />
            </div>
            <div className="form-group">
                <label>Tanggal Pengajuan</label>
                <input type="date" className="form-control" name="tanggalPengajuan" />
            </div>
            <button className="btn btn-success" value="submit">Add</button>
        </form>
    )
}