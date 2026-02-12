// src/Sitemap.js

import React from 'react';

const pages = [
  { path: '/', lastmod: '2025-07-04', changefreq: 'weekly', priority: '1.0' },
  { path: '/about-us', lastmod: '2025-07-04', changefreq: 'monthly', priority: '1.0' },
  { path: '/contact-us', lastmod: '2025-07-04', changefreq: 'monthly', priority: '1.0' },
  { path: '/packages', lastmod: '2025-07-04', changefreq: 'monthly', priority: '1.0' },
  {
    path: '/packages-details/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
    lastmod: '2025-07-04',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/packages-details/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
    lastmod: '2025-07-04',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/packages-details/e5b7d9e3-4c8f-4f6a-a7b7-44e3d0e6b5d1',
    lastmod: '2025-07-04',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/packages-details/d7b6e3c2-b8c4-4e1a-bf3e-5d839d8f0f7d',
    lastmod: '2025-07-04',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/packages-details/b4a8f2f4-bb58-4cbb-87f5-9edb8e0e6e5f',
    lastmod: '2025-07-04',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/packages-details/k6l7m8n9-0o1p-2q34-r5s6-t7u8v9w0x1y2',
    lastmod: '2025-07-04',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/packages-details/a3b4e2d1-d7b4-4e6a-b12a-bc75d62c97c2',
    lastmod: '2025-07-04',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/packages-details/j5k6l7m8-9n0o-1p23-q4r5-s6t7u8v9w0x1',
    lastmod: '2025-07-04',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/packages-details/i4j5k6l7-8m9n-0o12-p3q4-r5s6t7u8v9w0',
    lastmod: '2025-07-04',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/packages-details/f2d82c4b-6b6e-41ae-8f65-2487f920cf94',
    lastmod: '2025-07-04',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/packages-details/h3i4j5k6-7l8m-9n01-2o34-p5q6r7s8t9u0',
    lastmod: '2025-07-04',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/packages-details/g2g3h4i5-6j7k-8l9m-0n12-3o4p5q6r7s89',
    lastmod: '2025-07-04',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/packages-details/d1b99a0a-6f2b-4cbe-bdc6-bfbd1295b798',
    lastmod: '2025-07-04',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/packages-details/f1f2a3b4-5c6d-7e89-0f12-3a4b5c6d7e89',
    lastmod: '2025-07-04',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/packages-details/e8e9f0b1-4d5e-4c67-9f89-0a1b2c3d4e56',
    lastmod: '2025-07-04',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/packages-details/c1a76e4d-9f1d-4d3a-bc2e-4d5d0eb6b8bc',
    lastmod: '2025-07-04',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/packages-details/d7d8f9a0-3d4e-4b12-9e34-8a9b1c2d3e45',
    lastmod: '2025-07-04',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/packages-details/c5c6e7e8-2f4e-40d5-92b1-9a7c8e8d5a91',
    lastmod: '2025-07-04',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/packages-details/b4b5d48e-0d8e-4f28-8c30-cf7a1e5390d6',
    lastmod: '2025-07-04',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/packages-details/e99f09a7-dd88-49sd5-b1c8-1daf80c2d7b1',
    lastmod: '2025-07-04',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/packages-details/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
    lastmod: '2025-07-04',
    changefreq: 'monthly',
    priority: '1.0',
  },
  { path: '/faqs', lastmod: '2025-07-04', changefreq: 'monthly', priority: '0.80' },
  { path: '/privacy-policy', lastmod: '2025-07-04', changefreq: 'monthly', priority: '0.80' },
  { path: '/zero-tolerance', lastmod: '2025-07-04', changefreq: 'monthly', priority: '0.80' },
  { path: '/terms-and-condition', lastmod: '2025-07-04', changefreq: 'monthly', priority: '0.80' },
  { path: '/vision-mission', lastmod: '2025-07-04', changefreq: 'monthly', priority: '0.80' },
];

const Sitemap = () => {
  const urlset = pages
    .map(
      (page) => `
  <url>
    <loc>https://airwayhorizons.com${page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('');

  return (
    <div>
      <pre>{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`}</pre>
    </div>
  );
};

export default Sitemap;
