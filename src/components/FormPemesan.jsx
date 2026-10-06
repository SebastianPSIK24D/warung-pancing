function FormPemesan({ data, error, onUbah, onSubmit, bisaCetak }) {
  return (
    <form className="form-pemesan" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="nama">Nama pemesan</label>
        <input
          id="nama"
          name="nama"
          type="text"
          value={data.nama}
          onChange={onUbah}
          placeholder="Contoh: Budi"
          className={error.nama ? "input-error" : ""}
        />
        {error.nama && <small className="pesan-error">{error.nama}</small>}
      </div>

      <div className="field">
        <label htmlFor="meja">Nomor meja</label>
        <select
          id="meja"
          name="meja"
          value={data.meja}
          onChange={onUbah}
          className={error.meja ? "input-error" : ""}
        >
          <option value="">-- Pilih meja --</option>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <option key={n} value={n}>
              Meja {n}
            </option>
          ))}
        </select>
        {error.meja && <small className="pesan-error">{error.meja}</small>}
      </div>

      <div className="field">
        <label htmlFor="catatan">Catatan (opsional)</label>
        <textarea
          id="catatan"
          name="catatan"
          rows="2"
          value={data.catatan}
          onChange={onUbah}
          placeholder="Contoh: kurang manis"
        />
      </div>

      {error.pesanan && <small className="pesan-error">{error.pesanan}</small>}

      <button type="submit" className="btn-cetak" disabled={!bisaCetak}>
        🖨️ Cetak Struk
      </button>
    </form>
  );
}

export default FormPemesan;