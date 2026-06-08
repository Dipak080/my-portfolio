document.addEventListener('DOMContentLoaded', () => {
    const DATA = window.GIT_COMMANDS || [];

    const sectionsEl = document.getElementById('gitSections');
    const empty = document.getElementById('tutEmpty');
    const catMenu = document.getElementById('catMenu');
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    const resultCount = document.getElementById('resultCount');
    const totalCount = document.getElementById('totalCount');

    let query = '';

    // Preserve category order as it first appears in the data
    const categories = [];
    DATA.forEach((c) => { if (!categories.includes(c.cat)) categories.push(c.cat); });
    const countFor = (cat) => DATA.filter((c) => c.cat === cat).length;

    totalCount.textContent = `${DATA.length} commands · ${categories.length} topics`;

    const slug = (s) => 'cat-' + s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    /* ---------- Sidebar jump links ---------- */
    categories.forEach((cat) => {
        const a = document.createElement('a');
        a.href = '#' + slug(cat);
        a.className = 'cat-btn';
        a.innerHTML = `<span>${cat}</span><span class="cat-count">${countFor(cat)}</span>`;
        a.addEventListener('click', closeSidebar);
        catMenu.appendChild(a);
    });

    /* ---------- Helpers ---------- */
    const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const highlight = (text, q) => {
        const safe = esc(text);
        if (!q) return safe;
        const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
        return safe.replace(re, '<mark>$1</mark>');
    };
    // Lightly colorize a git command line
    const colorize = (cmd, q) => {
        let html = highlight(cmd, q);
        html = html.replace(/^git\b/, '<span class="tok">git</span>');
        html = html.replace(/(\s)(--?[a-z][\w-]*)/g, '$1<span class="flag">$2</span>');
        return html;
    };

    /* ---------- Render ---------- */
    function render() {
        const q = query.trim().toLowerCase();
        sectionsEl.innerHTML = '';
        let shown = 0;

        categories.forEach((cat) => {
            const items = DATA.filter((c) => {
                if (c.cat !== cat) return false;
                return !q || c.cmd.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q) || c.cat.toLowerCase().includes(q);
            });
            if (items.length === 0) return;
            shown += items.length;

            const section = document.createElement('section');
            section.className = 'git-section';
            section.id = slug(cat);

            const h2 = document.createElement('h2');
            h2.className = 'git-section-title';
            h2.innerHTML = `${cat} <span class="git-count">${items.length}</span>`;
            section.appendChild(h2);

            const list = document.createElement('div');
            list.className = 'git-list';

            items.forEach((c) => {
                const row = document.createElement('div');
                row.className = 'git-cmd';

                const code = document.createElement('code');
                code.className = 'git-cmd-code';
                code.innerHTML = colorize(c.cmd, query.trim());

                const btn = document.createElement('button');
                btn.className = 'git-copy';
                btn.type = 'button';
                btn.textContent = 'Copy';
                btn.addEventListener('click', () => copy(btn, c.cmd));

                const desc = document.createElement('p');
                desc.className = 'git-cmd-desc';
                desc.innerHTML = highlight(c.desc, query.trim());

                row.append(code, btn, desc);
                list.appendChild(row);
            });

            section.appendChild(list);
            sectionsEl.appendChild(section);
        });

        empty.hidden = shown > 0;
        resultCount.textContent = `${shown} ${shown === 1 ? 'command' : 'commands'}` + (q ? ` for “${query.trim()}”` : '');
    }

    /* ---------- Copy ---------- */
    async function copy(btn, text) {
        try {
            await navigator.clipboard.writeText(text);
        } catch {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        }
        btn.textContent = '✓ Copied';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = 'Copy';
            btn.classList.remove('copied');
        }, 1500);
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
