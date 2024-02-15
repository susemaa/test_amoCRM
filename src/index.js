const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImE3ZDE4NGEzMjU0NDlmNWVjMDY4MGNiZWQ1MGRjMmJmOTc0NTljZWYzMWMzMDc0NzQzODM5ZmUxN2VmMmZlNzdhNjc1OGU5ZGU3YzU0YWZkIn0.eyJhdWQiOiIzZTdlYTEzNC0zNmQ0LTQyNmQtYjRkZS03OGQ3NjcxOWVkOTIiLCJqdGkiOiJhN2QxODRhMzI1NDQ5ZjVlYzA2ODBjYmVkNTBkYzJiZjk3NDU5Y2VmMzFjMzA3NDc0MzgzOWZlMTdlZjJmZTc3YTY3NThlOWRlN2M1NGFmZCIsImlhdCI6MTcwNzkwNDIxNiwibmJmIjoxNzA3OTA0MjE2LCJleHAiOjE3Mzk0OTEyMDAsInN1YiI6IjEwNjcyMzIyIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxNTY4Mjk0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiMDc5MDcxYTUtOWUzNC00YzZjLWFmZDUtMTIxY2E5YjM2NmZkIn0.Xw8jbX6ACKqAocFWCQQC_77pRIq1L4eLZ0bgDvtDpyqGaP3FSGW2B0Gq--wqtg_le1487KHSYCx9rYgj4hmQadVVHScQvG2hSQZcbbKWb9z3p1SeGj_pczfMpw9DhD33fZSFAa_VJ-jIjHJYfjhlDmzHzaeLQLGbG8u0hiH4TTZI7uZSYk-fFiLrIiR4VT_sCbzKQUzuVQR4kohm2G_szCShiCYh3DyngrulrM74gFYose3hDk_F5vh7g-tB31swsy7Lge3gWucmIYitnIJjho95c9_96s1HHma7xQZROLCgnCAsNDBqw8nOiDSYmviE0GoCD14N4Zvhdczpky-NkQ';
const upArrow = '\u2191';
const downArrow = '\u2193';

const store = {
  deals: [],
  page: -1,
  pagination: -1,
}

function mysort(by, order) {
  const obj = {
    'name' : {
      'asc': (a, b) => {
        if (a.name.length !== b.name.length) {
          return a.name.length - b.name.length;
        }
        return a.name.localeCompare(b.name, undefined, { numeric: true });
      },
      'desc': (a, b) => {
        if (a.name.length !== b.name.length) {
          return -(a.name.length - b.name.length);
        }
        return -a.name.localeCompare(b.name, undefined, { numeric: true });
      },
    },
    'price' : {
      'asc': (a, b) => a.price - b.price,
      'desc': (a, b) => b.price - a.price,
    },
  }
  return obj[by][order];
}

async function fetchAllDeals(page = 1) {
  
  const url = `http://localhost:3000/api?page=${page}&limit=5`;
  console.log('Загрузка страницы:', page);

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error('Ошибка сети');
    }

    const data = await response.json();
    const currDeals = data['_embedded'].leads;
    store.deals.push(...currDeals);
    store.deals.sort(mysort('name', 'asc'));

  } catch (error) {
    throw new Error(error);
  }

}

function app() {

  function updateTable(data) {
    const tableBody = document.getElementById('table-body');

    if (data && data.length > 0) {
      const rows = data.map(deal => {
        const createdAt = new Date(deal.created_at * 1000);
        const updatedAt = new Date(deal.updated_at * 1000);
        const options = {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        };
        return (`
        <tr class="text-center">
          <td>${deal.name}</td>
          <td>${deal.price} руб</td>
          <td>${createdAt.toLocaleDateString('ru-RU', options)}</td>
          <td>${deal.created_by}</td>
          <td>${updatedAt.toLocaleDateString('ru-RU', options)}</td>
          <td>${deal.updated_by}</td>
        </tr>
      `)}).join('');

      tableBody.innerHTML = rows;
    }
  }

  function updateFooter(page, limit) {
    const footer = document.getElementById('pagination-footer');
    const totalPagesAmount = limit === 'all'
      ? 1
      : Math.ceil(store.deals.length / limit);

    footer.innerHTML = `
    <div>
      Страница ${page} из ${totalPagesAmount}
    </div>
    ${page > 1 ? '<button class="btn btn-link">Предыдущая</button>' : ''}
    ${page < totalPagesAmount ? '<button class="btn btn-link">Следующая</button>' : ''}
    `;
    document.querySelector('.btn-link')
      .addEventListener('click', () => {

      })
  }

  let page = 1;
  const interval = setInterval(() => {
    fetchAllDeals(page)
      .catch((e) => {
        console.error(e);
        clearInterval(interval);
        setTimeout(() => updateTable(store.deals), 500);
      });
    page += 1;
  }, 500);

  const sortButtons = document.querySelectorAll('[role="button"]');
  const [name, price] = sortButtons;
  sortButtons.forEach((sortButton) => {
    sortButton.addEventListener('click', () => {
      const { id, firstElementChild } = sortButton;
      if (firstElementChild) {
        if (firstElementChild.textContent === upArrow) {
          store.deals = store.deals.sort(mysort(id, 'desc'));
          firstElementChild.textContent = downArrow;
        } else {
          store.deals = store.deals.sort(mysort(id, 'asc'));
          firstElementChild.textContent = upArrow;
        }
      } else {
        if (id === name.id) {
          price.firstElementChild.remove();
        } else {
          name.firstElementChild.remove();
        }
        const span = document.createElement('span');
        span.setAttribute('id', 'arrow');
        span.textContent = upArrow;
        sortButton.appendChild(span);
        store.deals = store.deals.sort(mysort(id, 'asc'));
        
      }
      if (store.pagination === 'all') {
        updateTable(store.deals);
      } else {
        const start = (store.page - 1) * store.pagination;
        updateTable(store.deals
          .slice(start, start + store.pagination));
      }
    });
  })

  const paginationButtons = document.querySelectorAll('[data-pagination]');
  paginationButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (!document.getElementById('loading')) {
        paginationButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        store.page = 1;
        store.pagination = button.dataset.pagination;
        if (store.pagination === 'all') {
          updateTable(store.deals);
        } else {
          updateTable(store.deals
            .slice(0, store.pagination));
        }
        updateFooter(1, store.pagination);
      }
    })
  });

}

app();