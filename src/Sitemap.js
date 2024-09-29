// src/Sitemap.js

import React from 'react';

const pages = [
    { path: '/', lastmod: '2024-09-29', changefreq: 'weekly', priority: '1.0' },
    { path: '/about-us', lastmod: '2024-09-29', changefreq: 'monthly', priority: '0.8' },
    { path: '/contact-us', lastmod: '2024-09-29', changefreq: 'monthly', priority: '0.8' },
    { path: '/packages', lastmod: '2024-09-29', changefreq: 'monthly', priority: '0.7' },
    { path: '/packages-details/1', lastmod: '2024-09-29', changefreq: 'monthly', priority: '0.6' }, // Example ID
    { path: '/faqs', lastmod: '2024-09-29', changefreq: 'monthly', priority: '0.6' },
    { path: '/privacy-policy', lastmod: '2024-09-29', changefreq: 'monthly', priority: '0.6' },
    { path: '/zero-tolerance', lastmod: '2024-09-29', changefreq: 'monthly', priority: '0.6' },
    { path: '/terms-and-condition', lastmod: '2024-09-29', changefreq: 'monthly', priority: '0.6' },
    { path: '/vision-mission', lastmod: '2024-09-29', changefreq: 'monthly', priority: '0.6' },
    { path: '/coming-soon', lastmod: '2024-09-29', changefreq: 'monthly', priority: '0.5' },
    { path: '/maintenance', lastmod: '2024-09-29', changefreq: 'monthly', priority: '0.5' },
    { path: '/500', lastmod: '2024-09-29', changefreq: 'monthly', priority: '0.5' },
    { path: '/404', lastmod: '2024-09-29', changefreq: 'monthly', priority: '0.5' },
    { path: '/403', lastmod: '2024-09-29', changefreq: 'monthly', priority: '0.5' },
    // Add dynamic routes here if applicable
];

const Sitemap = () => {
    const urlset = pages.map(page => (
        `<url>
          <loc>${`https://airwayhorizons.com${page.path}`}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>`
    )).join('');

    return (
        <div>
            <pre>{`<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
        ${urlset}
      </urlset>`}</pre>
        </div>
    );
};

export default Sitemap;
