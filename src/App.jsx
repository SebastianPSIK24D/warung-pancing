import { useState } from "react";
import { MENU, KATEGORI } from "./data/menu.jsx";
import KartuMenu from "./components/KartuMenu.jsx";
import Struk from "./components/Struk.jsx";
import FormPemesan from "./components/FormPemesan.jsx";
import AreaCetak from "./components/AreaCetak.jsx"; 
import GerbangWarung from "./components/GerbangWarung.jsx";

function App() {
  // bentuk state: { 1: 2, 3: 1 } artinya item id 1 sebanyak 2, id 3 sebanyak 1
  const [pesanan, setPesanan] = useState({});
  const [masukWarung, setMasukWarung] = useState(false);
  const [keranjangBuka, setKeranjangBuka] = useState(false);

  const [dataForm, setDataForm] = useState({ nama: "", meja: "", catatan: "" });
  const [error, setError] = useState({});
  const [strukCetak, setStrukCetak] = useState(null);

  const ubahForm = (e) => {
    const { name, value } = e.target;
    setDataForm((sebelumnya) => ({ ...sebelumnya, [name]: value }));

    // hapus pesan error field ini begitu pengguna mulai memperbaiki
    if (error[name]) {
      setError((sebelumnya) => ({ ...sebelumnya, [name]: undefined }));
    }
  };

  const validasi = () => {
    const hasil = {};

    if (!dataForm.nama.trim()) {
      hasil.nama = "Nama wajib diisi";
    } else if (dataForm.nama.trim().length < 3) {
      hasil.nama = "Nama minimal 3 karakter";
    }

    if (!dataForm.meja) {
      hasil.meja = "Pilih nomor meja";
    }

    if (barisStruk.length === 0) {
      hasil.pesanan = "Pilih minimal satu menu dulu";
    }

    return hasil;
  };

  const cetakStruk = (e) => {
    e.preventDefault();
    const hasil = validasi();
    setError(hasil);

    if (Object.keys(hasil).length === 0) {
      setStrukCetak({
        id: Date.now(),
        baris: barisStruk,
        total: totalHarga,
        nama: dataForm.nama.trim(),
        meja: dataForm.meja,
        catatan: dataForm.catatan.trim(),
        waktu: new Date().toLocaleString("id-ID", {
          dateStyle: "medium",
          timeStyle: "short",
        }),
      });
    }
  };

  const pesanBaru = () => {
    setPesanan({});
    setDataForm({ nama: "", meja: "", catatan: "" });
    setError({});
    setStrukCetak(null);
    setKeranjangBuka(false);
  };

  const tambahItem = (id) => {
    setPesanan((sebelumnya) => ({
      ...sebelumnya,
      [id]: (sebelumnya[id] || 0) + 1,
    }));
  };

  const kurangItem = (id) => {
    setPesanan((sebelumnya) => {
      const jumlahBaru = (sebelumnya[id] || 0) - 1;
      const salinan = { ...sebelumnya };

      if (jumlahBaru <= 0) {
        delete salinan[id]; // jumlah 0 berarti item dihapus dari pesanan
      } else {
        salinan[id] = jumlahBaru;
      }
      return salinan;
    });
  };

  const hapusItem = (id) => {
    setPesanan((sebelumnya) => {
      const salinan = { ...sebelumnya };
      delete salinan[id];
      return salinan;
    });
  };

  // ubah objek pesanan menjadi array baris struk
  const barisStruk = MENU
    .filter((item) => pesanan[item.id])
    .map((item) => ({
      ...item,
      jumlah: pesanan[item.id],
      subtotal: item.harga * pesanan[item.id],
    }));

  const totalHarga = barisStruk.reduce((total, baris) => total + baris.subtotal, 0);

  const totalItem = barisStruk.reduce((total, b) => total + b.jumlah, 0);



  return (
    <>
      {!masukWarung && (
        <GerbangWarung onSelesai={() => setMasukWarung(true)} />
      )}

      <div className="halaman">
        <div className="kolom-menu">
          <h1 className="judul">Warung Pancing</h1>
          <p className="subjudul">Pilih menu favoritmu, struknya langsung tercetak di samping</p>
          {KATEGORI.map((kat) => (
            <section key={kat.kode} className="bagian-menu">
              <h2 className="judul-bagian">
                {kat.ikon} {kat.judul}
              </h2>

              <div className="daftar-menu">
                {MENU.filter((item) => item.kategori === kat.kode).map((item) => (
                  <KartuMenu
                    key={item.id}
                    item={item}
                    jumlah={pesanan[item.id] || 0}
                    onTambah={tambahItem}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
        
        <button className="bar-keranjang" onClick={() => setKeranjangBuka(true)}>
          <span>🛒 Pesanan ({totalItem})</span>
          <strong>Rp{totalHarga.toLocaleString("id-ID")}</strong>
        </button>

        {keranjangBuka && (
          <div className="backdrop" onClick={() => setKeranjangBuka(false)} />
        )}

        <div className={`kolom-struk ${keranjangBuka ? "terbuka" : ""}`}>
          <button className="tutup-sheet" onClick={() => setKeranjangBuka(false)}>
            ▾ Tutup
          </button>

            <Struk
              baris={barisStruk}
              total={totalHarga}
              onTambah={tambahItem}
              onKurang={kurangItem}
              onHapus={hapusItem}
            />

            <FormPemesan
              data={dataForm}
              error={error}
              onUbah={ubahForm}
              onSubmit={cetakStruk}
              bisaCetak={true}
            />

            {strukCetak && (
              <AreaCetak key={strukCetak.id} data={strukCetak} onPesanBaru={pesanBaru} />
            )}
        </div>
      </div>
    </>
  );
}

export default App;