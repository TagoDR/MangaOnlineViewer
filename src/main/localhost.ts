// == Localhost =====================================================================================
export default {
  name: 'Localhost',
  url: /(file:\/\/\/.+index.html|https?:\/\/(127.0.0.1|localhost):8080\/.*)/,
  homepage: 'http://127.0.0.1:8080/index.html',
  language: ['Portuguese'],
  category: 'manga',
  run: () => {
    function placeholder(
      width: number,
      height: number,
      bgColor = '#0F1C3F',
      textColor = '#ECEAD9',
    ) {
      const str = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect fill="${bgColor}" width="${width}" height="${height}"/>
  <text fill="${textColor}" font-family="sans-serif" font-size="30" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle">${width}x${height}</text>
</svg>`;
      const cleaned = str
        .replace(/[\t\n\r]/gim, '') // Strip newlines and tabs
        .replace(/\s\s+/g, ' ') // Condense multiple spaces
        .replace(/'/gim, '\\i'); // Normalize quotes

      const encoded = encodeURIComponent(cleaned)
        .replace(/\(/g, '%28') // Encode brackets
        .replace(/\)/g, '%29');

      return `data:image/svg+xml;charset=UTF-8,${encoded}`;
    }

    return {
      title: 'Manga Loaded',
      series: '',
      pages: 5,
      begin: 0,
      prev: '',
      next: '?next',
      listImages: [
        placeholder(985, 1400, '#152C55'),
        placeholder(1970, 1400, '#2D1657'),
        placeholder(985, 1400, '#7A1420'),
        placeholder(985, 1400, '#0F5B30'),
        placeholder(1970, 1400, '#806D15'),
      ],
    };
  },
};
