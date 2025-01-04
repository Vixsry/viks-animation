# Berkontribusi ke VIKS Animation Library

<div align="center">

[![Code Style](https://img.shields.io/badge/Code_Style-Prettier-00FFFF?style=for-the-badge&logoColor=black)](#code-style)
[![Commit Style](https://img.shields.io/badge/Commits-Conventional-40E0D0?style=for-the-badge&logoColor=black)](#commit-guidelines)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-00FFFF?style=for-the-badge&logoColor=black)](#submitting-pull-requests)

</div>

## 🌟 Selamat Datang!

Pertama-tama, terima kasih telah mempertimbangkan untuk berkontribusi pada VIKS Animation Library! Orang-orang seperti Anda yang membuat VIKS menjadi alat yang hebat. Dokumen ini memberikan panduan dan langkah-langkah untuk berkontribusi.

## 📜 Kode Etik

Dengan berpartisipasi dalam proyek ini, Anda diharapkan untuk mematuhi Kode Etik kami:

- Gunakan bahasa yang ramah dan inklusif
- Hormati perbedaan sudut pandang dan pengalaman
- Terima kritik konstruktif dengan baik
- Fokus pada apa yang terbaik untuk komunitas
- Tunjukkan empati terhadap anggota komunitas lainnya

## 🔄 Proses Pull Request

1. **Konvensi Penamaan Branch**
   - Fitur: `feature/deskripsi`
   - Perbaikan Bug: `fix/deskripsi`
   - Dokumentasi: `docs/deskripsi`
   - Performa: `perf/deskripsi`

2. **Sebelum Mengirim PR**
   - Perbarui README.md dengan detail perubahan (jika diperlukan)
   - Perbarui dokumentasi
   - Tambah atau perbarui pengujian
   - Pastikan semua pengujian berhasil
   - Perbarui nomor versi mengikuti [SemVer](http://semver.org/)

3. **Template PR**
   ```markdown
   ## Deskripsi
   [Jelaskan perubahan Anda]

   ## Jenis Perubahan
   - [ ] Perbaikan bug
   - [ ] Fitur baru
   - [ ] Perubahan yang merusak
   - [ ] Pembaruan dokumentasi

   ## Checklist
   - [ ] Kode saya mengikuti panduan gaya
   - [ ] Saya telah melakukan peninjauan mandiri
   - [ ] Saya telah menambahkan komentar pada kode
   - [ ] Saya telah memperbarui dokumentasi
   - [ ] Saya telah menambahkan pengujian
   - [ ] Semua pengujian berhasil
   ```

## 📝 Standar Koding

### Panduan Gaya JavaScript

- Gunakan fitur ES6+
- Ikuti konfigurasi Prettier
- Panjang maksimum baris: 100 karakter
- Gunakan nama variabel yang bermakna
- Dokumentasikan logika yang kompleks

```javascript
// ✅ Baik
const calculateOffset = (element, options) => {
  const { offset = 0 } = options;
  return element.getBoundingClientRect().top + offset;
};

// ❌ Buruk
const calc = (e, o) => {
  return e.getBoundingClientRect().top + (o.offset || 0);
};
```

### Panduan Gaya CSS

```css
/* ✅ Baik */
.viks-animation {
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease;
}

/* ❌ Buruk */
.anim {
  transform:translateY(20px);opacity:0;
  transition: all .3s ease
}
```

## 📊 Panduan Commit

Ikuti [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Tipe:
- `feat`: Fitur baru
- `fix`: Perbaikan bug
- `docs`: Dokumentasi
- `style`: Gaya kode
- `refactor`: Refaktorisasi kode
- `perf`: Performa
- `test`: Pengujian
- `chore`: Pemeliharaan

Contoh:
```
feat(animations): tambah animasi zoom-rotate baru

- Menambahkan animasi baru yang menggabungkan zoom dan rotasi
- Memperbarui dokumentasi
- Menambah pengujian

Closes #123
```

## 📚 Dokumentasi

- Perbarui komentar JSDoc untuk semua metode publik
- Jaga README.md tetap terbarui
- Perbarui katalog animasi
- Tambahkan contoh untuk fitur baru

Contoh JSDoc:
```javascript
/**
 * Menginisialisasi animasi untuk sebuah elemen
 * @param {HTMLElement} element - Elemen target
 * @param {Object} options - Opsi animasi
 * @param {number} [options.duration=1000] - Durasi animasi dalam ms
 * @param {string} [options.easing='ease'] - Fungsi timing animasi
 * @returns {void}
 */
```

## 🧪 Panduan Pengujian

### Struktur Pengujian
Pengujian diorganisir dalam beberapa kategori utama:

1. **Pengujian Inisialisasi**
```javascript
describe('VIKS Animation', () => {
  it('harus menginisialisasi dengan opsi default', () => {
    const element = document.createElement('div');
    const viks = new VIKS(element);
    expect(viks.options).toEqual({
      duration: 1000,
      easing: 'ease',
      offset: 0
    });
  });
});
```

2. **Pengujian Parameter Animasi**
```javascript
describe('Parameter Animasi', () => {
  it('harus mendapatkan nilai delay yang benar', () => {
    const element = document.createElement('div');
    element.setAttribute('data-viks', 'fade-up delay-500');
    container.appendChild(element);
    
    const viks = VIKS.init();
    const delay = viks.getDelay(element);
    expect(delay).toBe('500');
  });
});
```

### Persyaratan Pengujian

- Minimal 80% cakupan untuk kode baru
- Semua tipe animasi harus memiliki pengujian
- Uji kompatibilitas browser
- Sertakan pengujian untuk:
  - Parameter animasi
  - Deteksi elemen
  - Perilaku scroll
  - Penerapan/penghapusan animasi
  - Event window
  - Fungsionalitas Intersection Observer

### Menjalankan Pengujian

```bash
# Jalankan semua pengujian
npm test

# Jalankan pengujian dengan cakupan
npm test -- --coverage

# Jalankan file pengujian tertentu
npm test -- path/to/test-file.test.js

# Jalankan pengujian dalam mode watch
npm test -- --watch
```

## 👥 Komunitas

### Mendapatkan Bantuan
- GitHub Issues
- Komunitas Discord
- Tag Stack Overflow: `viks-animation`

### Kontributor Reguler
- Akses ke pertemuan pengembangan
- Disebutkan di README.md
- Akses awal ke fitur baru

## 🏆 Pengakuan

Semua kontributor akan:
- Terdaftar di CONTRIBUTORS.md
- Disebutkan di catatan rilis
- Diberi kredit di dokumentasi

## 📋 Template Issue

### Template Laporan Bug
```markdown
**Deskripsi:**
[Deskripsi jelas tentang bug]

**Langkah-langkah untuk Mereproduksi:**
1. [Langkah Pertama]
2. [Langkah Kedua]
3. [Dan seterusnya...]

**Perilaku yang diharapkan:**
[Apa yang Anda harapkan terjadi]

**Perilaku aktual:**
[Apa yang sebenarnya terjadi]

**Lingkungan:**
- Browser:
- OS:
- Versi VIKS:
```

### Template Permintaan Fitur
```markdown
**Deskripsi Fitur:**
[Jelaskan fiturnya]

**Kasus Penggunaan:**
[Mengapa fitur ini diperlukan?]

**Solusi yang Diusulkan:**
[Ide Anda untuk implementasi]

**Alternatif yang Dipertimbangkan:**
[Solusi lain yang telah Anda pertimbangkan]
```

---

<div align="center">

[![Questions](https://img.shields.io/badge/Ada_Pertanyaan%3F-Tanyakan!-00FFFF?style=for-the-badge&logoColor=black)](https://github.com/Vixsry/viks-animation/issues)

Terima kasih telah berkontribusi pada VIKS Animation Library! 🎉

</div>
