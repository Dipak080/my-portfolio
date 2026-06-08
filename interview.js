document.addEventListener('DOMContentLoaded', () => {
    const DATA = window.INTERVIEW || [];

    const listEl = document.getElementById('ivList');
    const empty = document.getElementById('tutEmpty');
    const catMenu = document.getElementById('catMenu');
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    const resultCount = document.getElementById('resultCount');
    const totalCount = document.getElementById('totalCount');
    const heroCount = document.getElementById('heroCount');
    const expandAllBtn = document.getElementById('expandAll');

    let activeCat = 'All';
    let query = '';
    let allOpen = false;

    /* ---------- Categories ---------- */
    const categories = ['All'];
    DATA.forEach((x) => { if (!categories.includes(x.cat)) categories.push(x.cat); });
    const countFor = (cat) => (cat === 'All' ? DATA.length : DATA.filter((x) => x.cat === cat).length);

    totalCount.textContent = `${DATA.length} questions · ${categories.length - 1} topics`;
    heroCount.textContent = `${DATA.length}`;

    categories.forEach((cat) => {
        const b = document.createElement('button');
        b.className = 'cat-btn' + (cat === 'All' ? ' active' : '');
        b.innerHTML = `<span>${cat}</span><span class="cat-count">${countFor(cat)}</span>`;
        b.addEventListener('click', () => {
            activeCat = cat;
            document.querySelectorAll('.cat-btn').forEach((x) => x.classList.toggle('active', x === b));
            render();
            closeSidebar();
        });
        catMenu.appendChild(b);
    });

    /* ---------- Helpers ---------- */
    const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const highlight = (text, q) => {
        const safe = esc(text);
        if (!q) return safe;
        const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
        return safe.replace(re, '<mark>$1</mark>');
    };
    const slug = (s) => 'cat-' + s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    /* ---------- Render ---------- */
    function render() {
        const q = query.trim().toLowerCase();
        listEl.innerHTML = '';
        let shown = 0;

        const cats = activeCat === 'All' ? categories.slice(1) : [activeCat];

        cats.forEach((cat) => {
            const items = DATA.filter((x) => {
                if (x.cat !== cat) return false;
                return !q || x.q.toLowerCase().includes(q) || x.a.toLowerCase().includes(q) || x.cat.toLowerCase().includes(q);
            });
            if (items.length === 0) return;
            shown += items.length;

            const section = document.createElement('section');
            section.className = 'iv-section';
            section.id = slug(cat);

            const h2 = document.createElement('h2');
            h2.className = 'iv-section-title';
            h2.innerHTML = `${cat} <span class="iv-count">${items.length}</span>`;
            section.appendChild(h2);

            const list = document.createElement('div');
            list.className = 'iv-list';

            items.forEach((x) => {
                const item = document.createElement('div');
                item.className = 'iv-item' + (allOpen || q ? ' open' : '');

                const btn = document.createElement('button');
                btn.className = 'iv-q';
                btn.type = 'button';
                btn.innerHTML =
                    `<span class="iv-q-icon">+</span>` +
                    `<span class="iv-q-text">${highlight(x.q, query.trim())}</span>`;
                btn.addEventListener('click', () => item.classList.toggle('open'));

                const aWrap = document.createElement('div');
                aWrap.className = 'iv-a-wrap';
                const a = document.createElement('p');
                a.className = 'iv-a';
                a.innerHTML = highlight(x.a, query.trim());
                aWrap.appendChild(a);

                item.append(btn, aWrap);
                list.appendChild(item);
            });

            section.appendChild(list);
            listEl.appendChild(section);
        });

        empty.hidden = shown > 0;
        resultCount.textContent = `${shown} ${shown === 1 ? 'question' : 'questions'}` +
            (activeCat !== 'All' ? ` in ${activeCat}` : '') + (q ? ` for “${query.trim()}”` : '');
    }

    /* ---------- Search ---------- */
    let debounce;
    searchInput.addEventListener('input', (e) => {
        query = e.target.value;
        searchClear.hidden = query.length === 0;
        clearTimeout(debounce);
        debounce = setTimeout(render, 120);
    });
    searchClear.addEventListener('click', () => {
        query = '';
        searchInput.value = '';
        searchClear.hidden = true;
        searchInput.focus();
        render();
    });

    /* ---------- Expand / collapse all ---------- */
    expandAllBtn.addEventListener('click', () => {
        allOpen = !allOpen;
        expandAllBtn.textContent = allOpen ? 'Collapse all' : 'Expand all';
        document.querySelectorAll('.iv-item').forEach((i) => i.classList.toggle('open', allOpen));
    });

    /* ---------- Scroll progress + back to top ---------- */
    const progress = document.getElementById('scrollProgress');
    const backToTop = document.getElementById('backToTop');
    const onScroll = () => {
        const scrolled = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        if (progress) progress.style.width = height > 0 ? `${(scrolled / height) * 100}%` : '0%';
        if (backToTop) backToTop.classList.toggle('show', scrolled > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    /* ---------- Mobile sidebar ---------- */
    const sidebar = document.getElementById('tutSidebar');
    const toggle = document.getElementById('sidebarToggle');
    const backdrop = document.getElementById('tutBackdrop');
    function closeSidebar() {
        sidebar.classList.remove('open');
        toggle.classList.remove('open');
        backdrop.classList.remove('show');
    }
    toggle.addEventListener('click', () => {
        const open = sidebar.classList.toggle('open');
        toggle.classList.toggle('open', open);
        backdrop.classList.toggle('show', open);
    });
    backdrop.addEventListener('click', closeSidebar);

    /* ---------- Init ---------- */
    render();
    onScroll();
});
