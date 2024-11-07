export default function json2html(data) {
    const headers = [...new Set(data.flatMap(Object.keys))];
    
    const thead = <thead><tr>${headers.map(header => <th>${header}</th>).join('')}</tr></thead>;
    
    const tbody = `<tbody>${data.map(row => 
      <tr>${headers.map(header => <td>${row[header] !== undefined ? row[header] : ''}</td>).join('')}</tr>
    ).join('')}</tbody>`;
  
    return <table data-user="saitejakorra2002@gmail.com">${thead}${tbody}</table>;
  }