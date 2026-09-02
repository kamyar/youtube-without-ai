/* YouTube Without AI popup: settings live in storage; stats come from the active tab. */
(() => {
  'use strict';
  const B = globalThis.browser ?? globalThis.chrome;
  const DEFAULTS = { enabled: true, mode: 'hide', skipShorts: true };
  let settings = { ...DEFAULTS };

  const $ = (id) => document.getElementById(id);

  const render = () => {
    $('enabled').checked = settings.enabled;
    $('skipShorts').checked = settings.skipShorts;
    const mode = settings.mode === 'dim' || settings.mode === 'debug' ? settings.mode : 'hide';
    $('mode-hide').classList.toggle('active', mode === 'hide');
    $('mode-dim').classList.toggle('active', mode === 'dim');
    $('mode-debug').classList.toggle('active', mode === 'debug');
    document.body.classList.toggle('disabled', !settings.enabled);
  };

  const save = () => B.storage.local.set({ settings });

  const loadStats = async () => {
    try {
      const got = await B.storage.local.get(['totalPulled', 'cache_v1']);
      $('stat-total').textContent = got.totalPulled || 0;
      $('stat-cache').textContent = got.cache_v1 ? Object.keys(got.cache_v1).length : 0;
    } catch (e) { /* leave dashes */ }
    try {
      const tabs = await B.tabs.query({ active: true, currentWindow: true });
      if (tabs[0]?.id != null) {
        const stats = await B.tabs.sendMessage(tabs[0].id, { type: 'aib:stats' });
        if (stats) {
          $('stat-session').textContent = stats.sessionPulled;
          $('stat-cache').textContent = stats.cacheCount;
        }
      }
    } catch (e) {
      $('stat-session').textContent = '–'; // not a YouTube tab
    }
  };

  const init = async () => {
    try {
      const got = await B.storage.local.get('settings');
      if (got.settings) settings = { ...DEFAULTS, ...got.settings };
    } catch (e) { /* defaults */ }
    render();
    loadStats();

    $('enabled').addEventListener('change', () => { settings.enabled = $('enabled').checked; render(); save(); });
    $('skipShorts').addEventListener('change', () => { settings.skipShorts = $('skipShorts').checked; save(); });
    $('mode-hide').addEventListener('click', () => { settings.mode = 'hide'; render(); save(); });
    $('mode-dim').addEventListener('click', () => { settings.mode = 'dim'; render(); save(); });
    $('mode-debug').addEventListener('click', () => { settings.mode = 'debug'; render(); save(); });
    $('clear').addEventListener('click', async () => {
      await B.storage.local.set({ cache_v1: {}, totalPulled: 0 });
      loadStats();
    });
  };

  init();
})();
