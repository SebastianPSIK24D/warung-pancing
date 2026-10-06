function KartuMenu({ item, jumlah, onTambah }) {
  return (
    <div className="kartu-menu">
      <img className="foto-menu" src={item.gambar} alt={item.nama} />
      <h3>{item.nama}</h3>
      <p>Rp{item.harga.toLocaleString("id-ID")}</p>
      <button onClick={() => onTambah(item.id)}>
        + Tambah {jumlah > 0 && `(${jumlah})`}
      </button>
    </div>
  );
}

export default KartuMenu;