/*
 * Layout, routing and rendering. Content comes from js/content.js (window.SITE_CONTENT).
 * Tabs are linkable through the URL hash (/#experience). Text is always set with
 * textContent, so nothing from the content file is parsed as HTML.
 */
(function () {
  'use strict';

  var C = window.SITE_CONTENT;
  var tablist = document.getElementById('tablist');
  var panel = document.getElementById('panel');
  var DEFAULT_TAB = 'overview';

  /* ---------- small DOM helper ---------------------------------------- */

  function h(tag, props) {
    var node = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach(function (key) {
        var value = props[key];
        if (value === false || value === null || value === undefined) return;
        if (key === 'class') node.className = value;
        else if (key === 'text') node.textContent = value;
        else node.setAttribute(key, value === true ? '' : value);
      });
    }
    var kids = Array.prototype.slice.call(arguments, 2);
    flatten(kids).forEach(function (child) {
      if (child === null || child === undefined || child === false) return;
      node.appendChild(typeof child === 'string' || typeof child === 'number'
        ? document.createTextNode(String(child))
        : child);
    });
    return node;
  }

  function flatten(list) {
    return list.reduce(function (acc, item) {
      return acc.concat(Array.isArray(item) ? flatten(item) : [item]);
    }, []);
  }

  function link(href, label, className) {
    return h('a', {
      href: href,
      class: className || null,
      target: '_blank',
      rel: 'noopener noreferrer'
    }, label);
  }

  function externalLinkLabel(text) {
    return h('span', null, text, ' ', h('span', { 'aria-hidden': 'true' }, '↗'));
  }

  function formatDate(value) {
    if (!value) return '';
    var parts = String(value).split('-');
    var year = parts[0];
    if (parts.length === 1) return year;
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var month = months[parseInt(parts[1], 10) - 1];
    if (parts.length === 2) return month + ' ' + year;
    return month + ' ' + parseInt(parts[2], 10) + ', ' + year;
  }

  function byDateDesc(key) {
    return function (a, b) {
      var x = String(a[key] || ''), y = String(b[key] || '');
      return x < y ? 1 : x > y ? -1 : 0;
    };
  }

  function emptyState(message) {
    return h('p', { class: 'empty' }, message);
  }

  /* ---------- sections ------------------------------------------------- */

  function sectionHead(eyebrow, title, intro) {
    return h('header', { class: 'section-head' },
      eyebrow ? h('p', { class: 'eyebrow' }, eyebrow) : null,
      h('h2', null, title),
      intro ? h('p', null, intro) : null
    );
  }

  function renderOverview(root) {
    var p = C.profile;
    var fallback = h('span', { class: 'headshot-fallback', 'aria-hidden': 'true' }, initials(p.name));
    var img = h('img', {
      class: 'headshot',
      src: p.headshot,
      alt: p.headshotAlt,
      width: 400,
      height: 400,
      decoding: 'async'
    });
    var wrap = h('div', { class: 'headshot-wrap' }, img, fallback);
    img.addEventListener('error', function () { wrap.classList.add('is-missing'); });

    var contactLinks = [];
    if (p.contact.linkedin) {
      contactLinks.push(h('a', {
        class: 'btn btn--ghost',
        href: p.contact.linkedin,
        target: '_blank',
        rel: 'noopener noreferrer'
      }, 'LinkedIn', h('span', { 'aria-hidden': 'true' }, '↗')));
    }
    if (p.contact.email) {
      contactLinks.push(h('a', {
        class: 'btn btn--primary',
        href: 'mailto:' + p.contact.email
      }, 'Email me'));
    }

    root.appendChild(h('section', { class: 'hero', 'aria-labelledby': 'hero-name' },
      wrap,
      h('div', { class: 'hero__text' },
        h('p', { class: 'eyebrow' }, 'Profile overview'),
        h('h1', { class: 'hero__name', id: 'hero-name' }, p.name),
        h('p', { class: 'hero__title' }, p.title),
        h('p', { class: 'hero__tagline' }, p.tagline),
        h('div', { class: 'hero__bio' }, p.bio.map(function (para) { return h('p', null, para); })),
        h('div', { class: 'hero__actions' }, contactLinks)
      )
    ));

    root.appendChild(h('ul', { class: 'stats', 'aria-label': 'Highlights' },
      p.stats.map(function (s) {
        return h('li', { class: 'card stat-card' },
          h('span', { class: 'stat-card__value' }, s.value),
          h('span', { class: 'stat-card__label' }, s.label));
      })
    ));
  }

  function initials(name) {
    return String(name).split(/\s+/).map(function (w) { return w.charAt(0); }).join('').slice(0, 2).toUpperCase();
  }

  function renderExperience(root) {
    root.appendChild(sectionHead('Career', 'Experience',
      'Roles across data platforms, master data and AI enablement.'));
    var items = C.experience.map(function (role) {
      return h('li', { class: 'timeline__item' },
        h('span', { class: 'timeline__dot', 'aria-hidden': 'true' }),
        h('article', { class: 'card' },
          h('p', { class: 'timeline__dates' }, role.start + ' to ' + role.end),
          h('h3', null, role.title),
          h('p', { class: 'card__meta' }, role.company + (role.location ? ' · ' + role.location : '')),
          h('ul', null, role.highlights.map(function (line) {
            return h('li', { class: 'bullet' }, line);
          }))
        ));
    });
    root.appendChild(h('ol', { class: 'timeline', 'aria-label': 'Career timeline' }, items));
  }

  function renderResearch(root) {
    root.appendChild(sectionHead('Research', 'Research and publications',
      'Peer-reviewed work, white papers and book chapters. Filter by year or type.'));

    var years = unique(C.publications.map(function (p) { return String(p.year); })).sort().reverse();
    var types = unique(C.publications.map(function (p) { return p.type; })).sort();
    var yearSel = selectField('pub-year', 'Year', ['All years'].concat(years));
    var typeSel = selectField('pub-type', 'Type', ['All types'].concat(types));
    var count = h('p', { class: 'filter-count', 'aria-live': 'polite' });
    var list = h('div', { class: 'stack' });

    function draw() {
      var y = yearSel.select.value, t = typeSel.select.value;
      var rows = C.publications
        .filter(function (p) { return (y === 'All years' || String(p.year) === y) && (t === 'All types' || p.type === t); })
        .sort(byDateDesc('year'));
      list.replaceChildren();
      count.textContent = 'Showing ' + rows.length + ' of ' + C.publications.length;
      if (!rows.length) { list.appendChild(emptyState('No publications match these filters.')); return; }
      rows.forEach(function (p) {
        list.appendChild(h('article', { class: 'card' },
          h('div', null, h('span', { class: 'badge badge--accent' }, p.type), h('span', { class: 'badge' }, String(p.year))),
          h('h3', null, p.title),
          h('p', { class: 'card__meta' }, p.venue),
          p.url ? link(p.url, externalLinkLabel('View publication'), 'card__link') : null
        ));
      });
    }

    yearSel.select.addEventListener('change', draw);
    typeSel.select.addEventListener('change', draw);
    root.appendChild(h('div', { class: 'filters' }, yearSel.wrap, typeSel.wrap));
    root.appendChild(count);
    root.appendChild(list);
    draw();
  }

  function renderInnovation(root) {
    root.appendChild(sectionHead('Invention', 'Innovation and patents',
      'Patents, filings and inventions. Status reflects the most recent public record.'));
    root.appendChild(h('div', { class: 'grid grid--2' },
      C.innovation.map(function (item) {
        var accent = item.status === 'Granted' ? 'badge--accent' : 'badge';
        return h('article', { class: 'card' },
          h('div', null, h('span', { class: 'badge ' + accent }, item.status), h('span', { class: 'badge' }, String(item.year))),
          h('h3', null, item.title),
          h('p', null, item.description),
          item.patentNumber ? h('p', { class: 'card__meta' }, item.patentNumber) : null,
          item.url ? link(item.url, externalLinkLabel('Details'), 'card__link') : null
        );
      })
    ));
  }

  function renderMedia(root) {
    root.appendChild(sectionHead('In the press', 'Media',
      'Articles, podcasts, videos and press mentions.'));
    var rows = C.media.slice().sort(byDateDesc('date'));
    root.appendChild(h('div', { class: 'stack' },
      rows.map(function (m) {
        return h('article', { class: 'card' },
          h('div', null, h('span', { class: 'badge badge--accent' }, m.type), h('span', { class: 'badge' }, formatDate(m.date))),
          h('h3', null, m.title),
          h('p', { class: 'card__meta' }, m.outlet),
          m.url ? link(m.url, externalLinkLabel('Read or watch'), 'card__link') : null
        );
      })
    ));
  }

  function renderSpeaking(root) {
    root.appendChild(sectionHead('On stage', 'Speaking',
      'Talks and panels. Slides and recordings are linked where available.'));
    var rows = C.speaking.slice().sort(byDateDesc('date'));
    root.appendChild(h('div', { class: 'grid grid--2' },
      rows.map(function (s) {
        var links = [];
        if (s.links && s.links.slides) links.push(link(s.links.slides, externalLinkLabel('Slides'), 'card__link'));
        if (s.links && s.links.recording) links.push(link(s.links.recording, externalLinkLabel('Recording'), 'card__link'));
        return h('article', { class: 'card' },
          h('div', null, h('span', { class: 'badge badge--accent' }, s.format || 'Talk'), h('span', { class: 'badge' }, formatDate(s.date))),
          h('h3', null, s.topic),
          h('p', { class: 'card__meta' }, s.event + ' · ' + s.location),
          links.length ? h('p', null, links.map(function (a, i) { return i ? [' · ', a] : a; })) : null
        );
      })
    ));
  }

  function renderJudging(root) {
    root.appendChild(sectionHead('Service', 'Judging and peer review',
      'Judging panels, editorial boards and peer review roles.'));
    root.appendChild(h('div', { class: 'grid grid--2' },
      C.judging.map(function (j) {
        return h('article', { class: 'card' },
          h('p', { class: 'eyebrow' }, j.period),
          h('h3', null, j.role),
          h('p', { class: 'card__meta' }, j.organization),
          h('p', null, j.description)
        );
      })
    ));
  }

  function renderSummary(root) {
    var s = C.summary;
    root.appendChild(sectionHead('Perspective', 'Professional summary'));
    root.appendChild(h('div', { class: 'prose' }, s.paragraphs.map(function (para) { return h('p', null, para); })));
    root.appendChild(h('p', { class: 'subhead' }, 'Focus areas'));
    root.appendChild(h('ul', { class: 'chip-list', 'aria-label': 'Focus areas' },
      s.focusAreas.map(function (f) { return h('li', null, f); })));
    root.appendChild(h('p', { class: 'subhead' }, 'Skills'));
    root.appendChild(h('div', { class: 'skills' },
      s.skills.map(function (group) {
        return h('section', { class: 'card skill-group' },
          h('h3', null, group.category),
          h('ul', { class: 'chip-list' }, group.items.map(function (item) { return h('li', null, item); }))
        );
      })
    ));
  }

  function renderAwards(root) {
    root.appendChild(sectionHead('Recognition', 'Awards and membership'));
    root.appendChild(h('p', { class: 'subhead' }, 'Awards and honors'));
    root.appendChild(h('div', { class: 'grid grid--2' },
      C.awards.slice().sort(byDateDesc('year')).map(function (a) {
        return h('article', { class: 'card' },
          h('span', { class: 'badge' }, String(a.year)),
          h('h3', null, a.title),
          h('p', { class: 'card__meta' }, a.issuer)
        );
      })
    ));
    root.appendChild(h('p', { class: 'subhead' }, 'Professional memberships'));
    root.appendChild(h('div', { class: 'grid grid--2' },
      C.memberships.map(function (m) {
        return h('article', { class: 'card' },
          h('span', { class: 'badge' }, 'Since ' + m.since),
          h('h3', null, m.organization),
          h('p', { class: 'card__meta' }, m.role)
        );
      })
    ));
  }

  function renderDocuments(root) {
    root.appendChild(sectionHead('Downloads', 'Documents and achievements',
      'Downloadable documents and a timeline of recent achievements.'));
    root.appendChild(h('div', { class: 'grid grid--2' },
      C.documents.map(function (d) {
        return h('article', { class: 'card doc-card' },
          h('div', null, h('span', { class: 'badge badge--accent' }, d.type)),
          h('h3', null, d.title),
          h('p', { class: 'card__meta' }, d.description),
          h('a', { class: 'btn btn--primary', href: d.file, download: '' },
            h('span', { 'aria-hidden': 'true' }, '↓'), ' Download PDF')
        );
      })
    ));
    root.appendChild(h('p', { class: 'subhead' }, 'Achievements'));
    root.appendChild(h('ol', { class: 'achievements' },
      C.achievements.map(function (a) {
        return h('li', null, h('span', { class: 'achievements__date' }, formatDate(a.date)), a.text);
      })
    ));
  }

  /* ---------- form helpers -------------------------------------------- */

  function unique(list) {
    return list.filter(function (v, i) { return list.indexOf(v) === i; });
  }

  function selectField(id, labelText, options) {
    var select = h('select', { id: id, name: id },
      options.map(function (o) { return h('option', { value: o }, o); }));
    var wrap = h('div', { class: 'field' }, h('label', { for: id }, labelText), select);
    return { select: select, wrap: wrap };
  }

  /* ---------- tabs ----------------------------------------------------- */

  var TABS = [
    { id: 'overview', label: 'Profile Overview', render: renderOverview },
    { id: 'experience', label: 'Experience', render: renderExperience },
    { id: 'research', label: 'Research & Publications', render: renderResearch },
    { id: 'innovation', label: 'Innovation & Patents', render: renderInnovation },
    { id: 'media', label: 'Media', render: renderMedia },
    { id: 'speaking', label: 'Speaking', render: renderSpeaking },
    { id: 'judging', label: 'Judging & Peer Review', render: renderJudging },
    { id: 'summary', label: 'Professional Summary', render: renderSummary },
    { id: 'awards', label: 'Awards & Membership', render: renderAwards },
    { id: 'documents', label: 'Documents & Achievements', render: renderDocuments }
  ];

  function findTab(id) {
    for (var i = 0; i < TABS.length; i++) if (TABS[i].id === id) return TABS[i];
    return null;
  }

  function currentHashId() {
    var id = decodeURIComponent(window.location.hash.replace(/^#/, ''));
    return findTab(id) ? id : DEFAULT_TAB;
  }

  function buildTabs() {
    TABS.forEach(function (tab) {
      var btn = h('button', {
        type: 'button',
        role: 'tab',
        id: 'tab-' + tab.id,
        class: 'tab',
        'aria-controls': 'panel',
        'aria-selected': 'false',
        tabindex: '-1',
        'data-tab': tab.id
      }, tab.label);
      btn.addEventListener('click', function () { goTo(tab.id); });
      btn.addEventListener('keydown', onTabKeydown);
      tablist.appendChild(btn);
    });
  }

  function onTabKeydown(event) {
    var ids = TABS.map(function (t) { return t.id; });
    var index = ids.indexOf(event.currentTarget.getAttribute('data-tab'));
    var next = null;
    switch (event.key) {
      case 'ArrowRight': next = (index + 1) % ids.length; break;
      case 'ArrowLeft': next = (index - 1 + ids.length) % ids.length; break;
      case 'Home': next = 0; break;
      case 'End': next = ids.length - 1; break;
      default: return;
    }
    event.preventDefault();
    var nextId = ids[next];
    document.getElementById('tab-' + nextId).focus();
    goTo(nextId);
  }

  function goTo(id) {
    if (currentHashId() === id && window.location.hash === '#' + id) {
      show(id);
      return;
    }
    window.location.hash = id;
  }

  function show(id) {
    var tab = findTab(id) || findTab(DEFAULT_TAB);
    var buttons = tablist.querySelectorAll('[role="tab"]');
    var activeBtn = null;

    Array.prototype.forEach.call(buttons, function (btn) {
      var selected = btn.getAttribute('data-tab') === tab.id;
      btn.setAttribute('aria-selected', selected ? 'true' : 'false');
      btn.setAttribute('tabindex', selected ? '0' : '-1');
      if (selected) activeBtn = btn;
    });

    panel.setAttribute('aria-labelledby', 'tab-' + tab.id);
    panel.replaceChildren();
    tab.render(panel);

    panel.classList.remove('is-entering');
    void panel.offsetWidth; // restart the CSS transition
    panel.classList.add('is-entering');

    if (activeBtn && activeBtn.scrollIntoView) {
      activeBtn.scrollIntoView({ inline: 'nearest', block: 'nearest' });
    }
    document.title = tab.id === DEFAULT_TAB
      ? C.profile.name + ' | ' + C.profile.title
      : tab.label + ' | ' + C.profile.name;
    if (window.scrollY > 0) window.scrollTo(0, 0);
  }

  function route() { show(currentHashId()); }

  /* ---------- boot ----------------------------------------------------- */

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  buildTabs();
  window.addEventListener('hashchange', route);
  route();
})();
