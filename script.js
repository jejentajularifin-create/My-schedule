const scheduleData = [
    {
        day: "HARI 1",
        title: "DASAR & PONDASI",
        time: "⏰ 1–2 jam",
        content: `
            <span class="section-title">Ngoding (45-60 min)</span>
            <ul>
                <li>Struktur dasar HTML (head, body)</li>
                <li>Tag: h1-h6, p, img, a</li>
            </ul>
            <span class="section-title">Desain (30-45 min)</span>
            <ul>
                <li>Kenalan Canva/Figma</li>
                <li>Prinsip: Font, Warna, Layout</li>
            </ul>`,
        output: "1 Halaman HTML & 1 Poster"
    },
    {
        day: "HARI 2",
        title: "TAMPILAN & VISUAL",
        time: "⏰ 1–2 jam",
        content: `
            <span class="section-title">Ngoding (45-60 min)</span>
            <ul>
                <li>CSS: Warna, Font, Margin, Padding</li>
                <li>Hubungkan CSS ke HTML</li>
            </ul>
            <span class="section-title">Desain (30-45 min)</span>
            <ul>
                <li>Poster Promosi</li>
                <li>Feed Instagram UMKM</li>
            </ul>`,
        output: "Web Berwarna & 2 Desain"
    },
    {
        day: "HARI 3",
        title: "LAYOUT & BRANDING",
        time: "⏰ 1–2 jam",
        content: `
            <span class="section-title">Ngoding (45-60 min)</span>
            <ul>
                <li>Layout: Div, Flexbox</li>
                <li>Buat Navbar Sederhana</li>
            </ul>
            <span class="section-title">Desain (30-45 min)</span>
            <ul>
                <li>Logo Sederhana</li>
                <li>Palet Warna Brand</li>
            </ul>`,
        output: "Landing Page & Logo"
    },
    {
        day: "HARI 4",
        title: "JASA & PORTOFOLIO",
        time: "⏰ 1–2 jam",
        content: `
            <span class="section-title">Ngoding (60 min)</span>
            <ul>
                <li>Web Jasa: About, Service, Kontak WA</li>
            </ul>
            <span class="section-title">Desain (30-45 min)</span>
            <ul>
                <li>Banner Website & Thumbnail Jasa</li>
            </ul>`,
        output: "Web Jasa & Desain Siap Jual"
    },
    {
        day: "HARI 5",
        title: "SIMULASI CUAN",
        time: "⏰ 1–2 jam",
        content: `
            <span class="section-title">Ngoding (45 min)</span>
            <ul>
                <li>Web UMKM (Warung/Bengkel/Toko)</li>
            </ul>
            <span class="section-title">Desain (45 min)</span>
            <ul>
                <li>Paket UMKM: Poster, Feed, Banner</li>
            </ul>`,
        output: "1 Web UMKM & Paket Desain"
    },
    {
        day: "HARI 6",
        title: "JUALAN & FREELANCE",
        time: "⏰ 1–2 jam",
        content: `
            <span class="section-title">Praktik Cuan (Full)</span>
            <ul>
                <li>Upload Portofolio ke Drive/GitHub</li>
                <li>Siapkan Caption Jualan</li>
                <li>Share ke WA, FB, IG & Sribulancer</li>
            </ul>`,
        output: "Link Portofolio & Postingan Jasa"
    }
];

function initApp() {
    const tableBody = document.getElementById('scheduleBody');
    const savedStatus = JSON.parse(localStorage.getItem('studyProgress')) || {};

    tableBody.innerHTML = scheduleData.map((item, index) => {
        const isChecked = savedStatus[index] ? 'checked' : '';
        const rowClass = savedStatus[index] ? 'row-done' : '';

        return `
            <tr id="row-${index}" class="${rowClass}">
                <td class="day-box">
                    <span class="day-label">${item.day}</span>
                    <span class="time-label">${item.time}</span>
                    <div style="font-size:12px; margin-top:5px;">${item.title}</div>
                </td>
                <td>${item.content}</td>
                <td><span class="output-badge">🎯 ${item.output}</span></td>
                <td class="checkbox-cell" style="text-align:center;">
                    <input type="checkbox" ${isChecked} onclick="toggleTask(${index})">
                </td>
            </tr>
        `;
    }).join('');
}

function toggleTask(index) {
    const row = document.getElementById(`row-${index}`);
    const savedStatus = JSON.parse(localStorage.getItem('studyProgress')) || {};
    
    // Toggle class dan status
    if (row.classList.contains('row-done')) {
        row.classList.remove('row-done');
        delete savedStatus[index];
    } else {
        row.classList.add('row-done');
        savedStatus[index] = true;
    }
    
    // Simpan ke LocalStorage
    localStorage.setItem('studyProgress', JSON.stringify(savedStatus));
}

function resetProgress() {
    if (confirm("Hapus semua progres belajar?")) {
        localStorage.removeItem('studyProgress');
        location.reload();
    }
}

document.addEventListener('DOMContentLoaded', initApp);