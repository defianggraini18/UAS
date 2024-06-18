import React, { useEffect, useState } from 'react';

const DaftarBerita = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
          try {
            const response = await fetch('http://localhost:5000'); 
            if (!response.ok) {
              throw new Error('Failed to fetch news');
            }
            const data = await response.json();
            setNews(data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchNews();
      }, []);

    return (
        <div>
            <h1>Daftar Berita</h1>
            <ul>
                {news.map(item => (
                    <li key={item.id_berita}>
                        <h2>{item.judul_berita}</h2>
                        <p>{item.ringkasan}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DaftarBerita;
