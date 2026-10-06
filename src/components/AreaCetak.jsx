function AreaCetak({ data, onPesanBaru }) {
  return (
    <div className="area-cetak">
      <div className="printer">
        <div className="lampu" />
        <div className="celah" />
      </div>

      <div className="slot">
        <div className="struk struk-jadi">
          <div className="kepala-struk">
            <h2>WARUNG PANCING</h2>
            <p>Jl. Pancing No. 3</p>
            <p>{data.waktu}</p>
          </div>
          <hr />

          <p>Nama : {data.nama}</p>
          <p>Meja : {data.meja}</p>
          {data.catatan && <p>Catatan: {data.catatan}</p>}
          <hr />

          {data.baris.map((b) => (
            <div key={b.id} className="detail-baris">
              <span>
                {b.jumlah}x {b.nama}
              </span>
              <span>Rp{b.subtotal.toLocaleString("id-ID")}</span>
            </div>
          ))}

          <hr />
          <div className="total">
            <strong>TOTAL</strong>
            <strong>Rp{data.total.toLocaleString("id-ID")}</strong>
          </div>
          <hr />

          <p className="terima-kasih">Terima kasih, selamat menikmati! ☕</p>
          <div className="barcode" />
        </div>
      </div>

      <button className="btn-baru" onClick={onPesanBaru}>
        + Pesanan baru
      </button>
    </div>
  );
}

export default AreaCetak;