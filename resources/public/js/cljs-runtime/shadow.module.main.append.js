
shadow.cljs.devtools.client.env.module_loaded('main');

try { liarsdice.core.init_fn(); } catch (e) { console.error("An error occurred when calling (liarsdice.core/init-fn)"); console.error(e); }