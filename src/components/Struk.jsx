function Struk({ baris, total, onTambah, onKurang, onHapus }) {
  const tanggal = new Date().toLocaleString("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <div className="struk">
      <div className="kepala-struk">
        <h2>WARUNG PANCING</h2>
        <p>Jl. Pancing No. 3</p>
        <p>{tanggal}</p>
      </div>
      <hr />

      {baris.length === 0 ? (
        <p className="kosong">Belum ada pesanan</p>
      ) : (
        baris.map((b) => (
          <div key={b.id} className="baris-struk">
            <div className="nama-baris">
              <span>{b.nama}</span>
              <button className="btn-hapus" onClick={() => onHapus(b.id)}>
                ✕
              </button>
            </div>
            <div className="detail-baris">
              <div className="kontrol">
                <button onClick={() => onKurang(b.id)}>−</button>
                <span>{b.jumlah}</span>
                <button onClick={() => onTambah(b.id)}>+</button>
              </div>
              <span>Rp{b.subtotal.toLocaleString("id-ID")}</span>
            </div>
          </div>
        ))
      )}

      <hr />
      <div className="total">
        <strong>TOTAL</strong>
        <strong>Rp{total.toLocaleString("id-ID")}</strong>
      </div>
    </div>
  );
}

export default Struk;