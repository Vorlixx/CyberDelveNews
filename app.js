// Verileri data.js içindeki fonksiyonlardan çekiyoruz
const newsData = generateNewsDataset();
const ctfData = generateCtfDataset();

// HTML'deki kapsayıcı div'leri seçiyoruz
const newsContainer = document.getElementById('news-container');
const ctfContainer = document.getElementById('ctf-container');

// 1. Haberleri Ekrana Yazdırma Döngüsü
newsData.forEach(newsItem => {
    // Her bir haber için yeni bir div (kart) oluştur
    const card = document.createElement('div');
    card.className = 'card';

    // İçeriği doldur
    card.innerHTML = `
        <h3>${newsItem.title}</h3>
        <p><strong>Kaynak:</strong> ${newsItem.source} | <strong>Ülke:</strong> ${newsItem.country}</p>
        <p>${newsItem.description}</p>
        <small>Yayınlanma: ${new Date(newsItem.pubDate).toLocaleString('tr-TR')}</small>
    `;

    // Oluşturulan kartı sayfaya ekle
    newsContainer.appendChild(card);
});

// 2. CTF Etkinliklerini Ekrana Yazdırma Döngüsü
ctfData.forEach(ctfItem => {
    const card = document.createElement('div');
    card.className = 'card ctf-card';

    card.innerHTML = `
        <h3><a href="${ctfItem.link}" target="_blank">${ctfItem.title}</a></h3>
        <p><strong>Platform:</strong> ${ctfItem.platform} | <strong>Ülke:</strong> ${ctfItem.country}</p>
        <p>${ctfItem.description}</p>
        <small>Başlangıç: ${new Date(ctfItem.pubDate).toLocaleString('tr-TR')}</small>
    `;

    ctfContainer.appendChild(card);
});
