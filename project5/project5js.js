const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    
    const key = e.key;
    const code = e.code;

    insert.innerHTML = ` 
        <div class = 'color'>
            <table>
                <tr>
                    <th>key</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${(key === ' ' ? 'Space' : key)}</td>
                    <td>${code}</td>
                </tr>
            </table>
        </div>
    `;
});