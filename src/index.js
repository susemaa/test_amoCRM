// LONG ACCESS TOKEN
const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImE3ZDE4NGEzMjU0NDlmNWVjMDY4MGNiZWQ1MGRjMmJmOTc0NTljZWYzMWMzMDc0NzQzODM5ZmUxN2VmMmZlNzdhNjc1OGU5ZGU3YzU0YWZkIn0.eyJhdWQiOiIzZTdlYTEzNC0zNmQ0LTQyNmQtYjRkZS03OGQ3NjcxOWVkOTIiLCJqdGkiOiJhN2QxODRhMzI1NDQ5ZjVlYzA2ODBjYmVkNTBkYzJiZjk3NDU5Y2VmMzFjMzA3NDc0MzgzOWZlMTdlZjJmZTc3YTY3NThlOWRlN2M1NGFmZCIsImlhdCI6MTcwNzkwNDIxNiwibmJmIjoxNzA3OTA0MjE2LCJleHAiOjE3Mzk0OTEyMDAsInN1YiI6IjEwNjcyMzIyIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxNTY4Mjk0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiMDc5MDcxYTUtOWUzNC00YzZjLWFmZDUtMTIxY2E5YjM2NmZkIn0.Xw8jbX6ACKqAocFWCQQC_77pRIq1L4eLZ0bgDvtDpyqGaP3FSGW2B0Gq--wqtg_le1487KHSYCx9rYgj4hmQadVVHScQvG2hSQZcbbKWb9z3p1SeGj_pczfMpw9DhD33fZSFAa_VJ-jIjHJYfjhlDmzHzaeLQLGbG8u0hiH4TTZI7uZSYk-fFiLrIiR4VT_sCbzKQUzuVQR4kohm2G_szCShiCYh3DyngrulrM74gFYose3hDk_F5vh7g-tB31swsy7Lge3gWucmIYitnIJjho95c9_96s1HHma7xQZROLCgnCAsNDBqw8nOiDSYmviE0GoCD14N4Zvhdczpky-NkQ';
// 1 TIME ACCESS
//const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFkNDEzMGZlNmJmN2M0MTIyZmYxNTljNjJjYWMwNGViZTAyOWU1YmIzNzRlNTBkOTlkNTI1ZjNhODNiOTExZmYxZjA1YTFkYWQ3M2I0MzIxIn0.eyJhdWQiOiIzZTdlYTEzNC0zNmQ0LTQyNmQtYjRkZS03OGQ3NjcxOWVkOTIiLCJqdGkiOiJhZDQxMzBmZTZiZjdjNDEyMmZmMTU5YzYyY2FjMDRlYmUwMjllNWJiMzc0ZTUwZDk5ZDUyNWYzYTgzYjkxMWZmMWYwNWExZGFkNzNiNDMyMSIsImlhdCI6MTcwODA4MTA3NSwibmJmIjoxNzA4MDgxMDc1LCJleHAiOjE3MDgxNjc0NzUsInN1YiI6IjEwNjcyMzIyIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxNTY4Mjk0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiOGJmNWZjNDYtOWZmMC00ZTM4LTg1MGMtNTA3NGMyZTQ3NDA3In0.njmqA03Z5DxYgIGmWW2h1K02mm9k-YPam7ucCXXw37X9ZORJflRfxiN4WEt-JIXl0oOybnYFZoyLU4csmjUVnKc-DzC3tQRvEpeDup3chyl7WoSw7jEiAp_iGMX85OqrbO63pn4HUXP2p6mzyEBq6GhNGjg_qhybwnlJp3w_mqGa2EgLCgwPGNgCGjOro3Ksqti26z0YtCwHnhblzj65Ce2tAazZg9N8evBL9S2lFYBhs378e_RFqwf76XqTYZOqNNCY1-RhMbZ9hPk-8FVaJPZX_wOMB4zy2hXShj1z_XA2pcp2cwI-XU-cQ4ttd06P8L4tamr6mQ2S96Nk9KlwXw';
//const refreshToken = 'def5020050c37516b11d5a970c954eb19471b842050f115ae1c87c8361290e6545fc8a972deeb51f452abd67ed2333c28677f44c2151540b20a6153b6c54594331c21fb4f22ff96b35badb8e3eff7f554bd5b599042276139afdab84b4b21d3dcfd90625096f6c9a30691770f9fce727bd594a8bddb6b328a3f1e2d239b015f1bc3cfcae9a68c150b917b4c9d600748d6497ddca67e318430646c49a24112055d1dc8de14415d7182fb46ae124da76d2e28efa2003766ad914d4ba341b139efc5b0c0884bc6423b0ed0f9d0d345a360855c96a004bb1d65f4f2a7783b56e116c87d70a0f46df93bb9fc4d6ab36003f991f9f2a678db41e33f8ed03a27c0beca8bf691dd09efd67ec9c4d9556de4ac649beee0ce6fc677354c5a9a07de16ae0d706d45d22b05a922fb2bc20cae69d397be6225471f62f4c6e17f8e1fa50eee6def59017b681c22ce40ee63b3cf91f28b5a22c8f9974acefc293fde36a476017d4ee1e467ac4488d14347625f33c3e15cfd09e707867b59f8173727a448c8f43e3bdd1008adee8f8d39a867921e57796afbdad540c9755bd5ec3f42ad8d559c30bf36ae592288492a83e20b8c90d86a13f729e81963a6ae42c03983cb2a6530cb54a6c181550199b9f20b651513fb21da9c563ea105306c1c545c9ac4e716b7500263a6c78b14cbc6c746a56ec721c'
const upArrow = '\u2191';
const downArrow = '\u2193';

const store = {
  deals: [],
  page: 1,
  pagination: 'all',
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

    const links = document.querySelectorAll('.btn-link');
    links.forEach((link) => 
      link.addEventListener('click', () => {
        const step = link.textContent === 'Предыдущая' ? -1 : 1;
        store.page = store.page + step;
        const start = (store.page - 1) * store.pagination;
        updateTable(store.deals
          .slice(start, start + parseInt(store.pagination)));
        updateFooter(store.page, store.pagination);
      })
    )
  }

  let page = 1;
  const interval = setInterval(() => {
    fetchAllDeals(page)
      .catch((e) => {
        console.error(e);
        clearInterval(interval);
        //setTimeout(() => updateTable(store.deals), 500);
        updateTable(store.deals)
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
          .slice(start, start + parseInt(store.pagination)));
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